(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.geojsonvt = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = clip;

/* clip features between two axis-parallel lines:
 *     |        |
 *  ___|___     |     /
 * /   |   \____|____/
 *     |        |
 */

function clip(features, scale, k1, k2, axis, intersect, minAll, maxAll) {

    k1 /= scale;
    k2 /= scale;

    if (minAll >= k1 && maxAll <= k2) return features; // trivial accept
    else if (minAll > k2 || maxAll < k1) return null; // trivial reject

    var clipped = [];

    for (var i = 0; i < features.length; i++) {

        var feature = features[i],
            geometry = feature.geometry,
            type = feature.type,
            min, max;

        min = feature.min[axis];
        max = feature.max[axis];

        if (min >= k1 && max <= k2) { // trivial accept
            clipped.push(feature);
            continue;
        } else if (min > k2 || max < k1) continue; // trivial reject

        var slices = type === 1 ?
                clipPoints(geometry, k1, k2, axis) :
                clipGeometry(geometry, k1, k2, axis, intersect, type === 3);

        if (slices.length) {
            // if a feature got clipped, it will likely get clipped on the next zoom level as well,
            // so there's no need to recalculate bboxes
            clipped.push({
                geometry: slices,
                type: type,
                tags: features[i].tags || null,
                min: feature.min,
                max: feature.max
            });
        }
    }

    return clipped.length ? clipped : null;
}

function clipPoints(geometry, k1, k2, axis) {
    var slice = [];

    for (var i = 0; i < geometry.length; i++) {
        var a = geometry[i],
            ak = a[axis];

        if (ak >= k1 && ak <= k2) slice.push(a);
    }
    return slice;
}

function clipGeometry(geometry, k1, k2, axis, intersect, closed) {

    var slices = [];

    for (var i = 0; i < geometry.length; i++) {

        var ak = 0,
            bk = 0,
            b = null,
            points = geometry[i],
            area = points.area,
            dist = points.dist,
            len = points.length,
            a, j, last;

        var slice = [];

        for (j = 0; j < len - 1; j++) {
            a = b || points[j];
            b = points[j + 1];
            ak = bk || a[axis];
            bk = b[axis];

            if (ak < k1) {

                if ((bk > k2)) { // ---|-----|-->
                    slice.push(intersect(a, b, k1), intersect(a, b, k2));
                    if (!closed) slice = newSlice(slices, slice, area, dist);

                } else if (bk >= k1) slice.push(intersect(a, b, k1)); // ---|-->  |

            } else if (ak > k2) {

                if ((bk < k1)) { // <--|-----|---
                    slice.push(intersect(a, b, k2), intersect(a, b, k1));
                    if (!closed) slice = newSlice(slices, slice, area, dist);

                } else if (bk <= k2) slice.push(intersect(a, b, k2)); // |  <--|---

            } else {

                slice.push(a);

                if (bk < k1) { // <--|---  |
                    slice.push(intersect(a, b, k1));
                    if (!closed) slice = newSlice(slices, slice, area, dist);

                } else if (bk > k2) { // |  ---|-->
                    slice.push(intersect(a, b, k2));
                    if (!closed) slice = newSlice(slices, slice, area, dist);
                }
                // | --> |
            }
        }

        // add the last point
        a = points[len - 1];
        ak = a[axis];
        if (ak >= k1 && ak <= k2) slice.push(a);

        // close the polygon if its endpoints are not the same after clipping

        last = slice[slice.length - 1];
        if (closed && last && (slice[0][0] !== last[0] || slice[0][1] !== last[1])) slice.push(slice[0]);

        // add the final slice
        newSlice(slices, slice, area, dist);
    }

    return slices;
}

function newSlice(slices, slice, area, dist) {
    if (slice.length) {
        // we don't recalculate the area/length of the unclipped geometry because the case where it goes
        // below the visibility threshold as a result of clipping is rare, so we avoid doing unnecessary work
        slice.area = area;
        slice.dist = dist;

        slices.push(slice);
    }
    return [];
}

},{}],2:[function(require,module,exports){
'use strict';

module.exports = convert;

var simplify = require('./simplify');

// converts GeoJSON feature into an intermediate projected JSON vector format with simplification data

function convert(data, tolerance) {
    var features = [];

    if (data.type === 'FeatureCollection') {
        for (var i = 0; i < data.features.length; i++) {
            convertFeature(features, data.features[i], tolerance);
        }
    } else if (data.type === 'Feature') {
        convertFeature(features, data, tolerance);

    } else {
        // single geometry or a geometry collection
        convertFeature(features, {geometry: data}, tolerance);
    }
    return features;
}

function convertFeature(features, feature, tolerance) {
    var geom = feature.geometry,
        type = geom.type,
        coords = geom.coordinates,
        tags = feature.properties,
        i, j, rings;

    if (type === 'Point') {
        features.push(create(tags, 1, [projectPoint(coords)]));

    } else if (type === 'MultiPoint') {
        features.push(create(tags, 1, project(coords)));

    } else if (type === 'LineString') {
        features.push(create(tags, 2, [project(coords, tolerance)]));

    } else if (type === 'MultiLineString' || type === 'Polygon') {
        rings = [];
        for (i = 0; i < coords.length; i++) {
            rings.push(project(coords[i], tolerance));
        }
        features.push(create(tags, type === 'Polygon' ? 3 : 2, rings));

    } else if (type === 'MultiPolygon') {
        rings = [];
        for (i = 0; i < coords.length; i++) {
            for (j = 0; j < coords[i].length; j++) {
                rings.push(project(coords[i][j], tolerance));
            }
        }
        features.push(create(tags, 3, rings));

    } else if (type === 'GeometryCollection') {
        for (i = 0; i < geom.geometries.length; i++) {
            convertFeature(features, {
                geometry: geom.geometries[i],
                properties: tags
            }, tolerance);
        }

    } else {
        throw new Error('Input data is not a valid GeoJSON object.');
    }
}

function create(tags, type, geometry) {
    var feature = {
        geometry: geometry,
        type: type,
        tags: tags || null,
        min: [2, 1], // initial bbox values;
        max: [-1, 0]  // note that coords are usually in [0..1] range
    };
    calcBBox(feature);
    return feature;
}

function project(lonlats, tolerance) {
    var projected = [];
    for (var i = 0; i < lonlats.length; i++) {
        projected.push(projectPoint(lonlats[i]));
    }
    if (tolerance) {
        simplify(projected, tolerance);
        calcSize(projected);
    }
    return projected;
}

function projectPoint(p) {
    var sin = Math.sin(p[1] * Math.PI / 180),
        x = (p[0] / 360 + 0.5),
        y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);

    y = y < -1 ? -1 :
        y > 1 ? 1 : y;

    return [x, y, 0];
}

// calculate area and length of the poly
function calcSize(points) {
    var area = 0,
        dist = 0;

    for (var i = 0, a, b; i < points.length - 1; i++) {
        a = b || points[i];
        b = points[i + 1];

        area += a[0] * b[1] - b[0] * a[1];

        // use Manhattan distance instead of Euclidian one to avoid expensive square root computation
        dist += Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]);
    }
    points.area = Math.abs(area / 2);
    points.dist = dist;
}

// calculate the feature bounding box for faster clipping later
function calcBBox(feature) {
    var geometry = feature.geometry,
        min = feature.min,
        max = feature.max;

    if (feature.type === 1) calcRingBBox(min, max, geometry);
    else for (var i = 0; i < geometry.length; i++) calcRingBBox(min, max, geometry[i]);

    return feature;
}

function calcRingBBox(min, max, points) {
    for (var i = 0, p; i < points.length; i++) {
        p = points[i];
        min[0] = Math.min(p[0], min[0]);
        max[0] = Math.max(p[0], max[0]);
        min[1] = Math.min(p[1], min[1]);
        max[1] = Math.max(p[1], max[1]);
    }
}

},{"./simplify":4}],3:[function(require,module,exports){
'use strict';

module.exports = geojsonvt;

var convert = require('./convert'), // GeoJSON conversion and preprocessing
    clip = require('./clip'),       // stripe clipping algorithm
    wrap = require('./wrap'),       // date line processing
    createTile = require('./tile'); // final simplified tile generation


function geojsonvt(data, options) {
    return new GeoJSONVT(data, options);
}

function GeoJSONVT(data, options) {
    options = this.options = extend(Object.create(this.options), options);

    var debug = options.debug;

    if (debug) console.time('preprocess data');

    var z2 = 1 << options.maxZoom, // 2^z
        features = convert(data, options.tolerance / (z2 * options.extent));

    this.tiles = {};
    this.tileCoords = [];

    if (debug) {
        console.timeEnd('preprocess data');
        console.log('index: maxZoom: %d, maxPoints: %d', options.indexMaxZoom, options.indexMaxPoints);
        console.time('generate tiles');
        this.stats = {};
        this.total = 0;
    }

    features = wrap(features, options.buffer / options.extent, intersectX);

    // start slicing from the top tile down
    this.splitTile(features, 0, 0, 0);

    if (debug) {
        console.log('features: %d, points: %d', this.tiles[0].numFeatures, this.tiles[0].numPoints);
        console.timeEnd('generate tiles');
        console.log('tiles generated:', this.total, JSON.stringify(this.stats));
    }
}

GeoJSONVT.prototype.options = {
    maxZoom: 14,            // max zoom to preserve detail on
    indexMaxZoom: 5,        // max zoom in the tile index
    indexMaxPoints: 100000, // max number of points per tile in the tile index
    solidChildren: false,   // whether to tile solid square tiles further
    tolerance: 3,           // simplification tolerance (higher means simpler)
    extent: 4096,           // tile extent
    buffer: 64,             // tile buffer on each side
    debug: 0                // logging level (0, 1 or 2)
};

GeoJSONVT.prototype.splitTile = function (features, z, x, y, cz, cx, cy) {

    var stack = [features, z, x, y],
        options = this.options,
        debug = options.debug;

    // avoid recursion by using a processing queue
    while (stack.length) {
        y = stack.pop();
        x = stack.pop();
        z = stack.pop();
        features = stack.pop();

        var z2 = 1 << z,
            id = toID(z, x, y),
            tile = this.tiles[id],
            tileTolerance = z === options.maxZoom ? 0 : options.tolerance / (z2 * options.extent);

        if (!tile) {
            if (debug > 1) console.time('creation');

            tile = this.tiles[id] = createTile(features, z2, x, y, tileTolerance, z === options.maxZoom);
            this.tileCoords.push({z: z, x: x, y: y});

            if (debug) {
                if (debug > 1) {
                    console.log('tile z%d-%d-%d (features: %d, points: %d, simplified: %d)',
                        z, x, y, tile.numFeatures, tile.numPoints, tile.numSimplified);
                    console.timeEnd('creation');
                }
                var key = 'z' + z;
                this.stats[key] = (this.stats[key] || 0) + 1;
                this.total++;
            }
        }

        // save reference to original geometry in tile so that we can drill down later if we stop now
        tile.source = features;

        // stop tiling if the tile is solid clipped square
        if (!options.solidChildren && isClippedSquare(tile, options.extent, options.buffer)) continue;

        // if it's the first-pass tiling
        if (!cz) {
            // stop tiling if we reached max zoom, or if the tile is too simple
            if (z === options.indexMaxZoom || tile.numPoints <= options.indexMaxPoints) continue;

        // if a drilldown to a specific tile
        } else {
            // stop tiling if we reached base zoom or our target tile zoom
            if (z === options.maxZoom || z === cz) continue;

            // stop tiling if it's not an ancestor of the target tile
            var m = 1 << (cz - z);
            if (x !== Math.floor(cx / m) && y !== Math.floor(cy / m)) continue;
        }

        // if we slice further down, no need to keep source geometry
        tile.source = null;

        if (debug > 1) console.time('clipping');

        // values we'll use for clipping
        var k1 = 0.5 * options.buffer / options.extent,
            k2 = 0.5 - k1,
            k3 = 0.5 + k1,
            k4 = 1 + k1,
            tl, bl, tr, br, left, right;

        tl = bl = tr = br = null;

        left  = clip(features, z2, x - k1, x + k3, 0, intersectX, tile.min[0], tile.max[0]);
        right = clip(features, z2, x + k2, x + k4, 0, intersectX, tile.min[0], tile.max[0]);

        if (left) {
            tl = clip(left, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);
            bl = clip(left, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);
        }

        if (right) {
            tr = clip(right, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);
            br = clip(right, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);
        }

        if (debug > 1) console.timeEnd('clipping');

        if (tl) stack.push(tl, z + 1, x * 2,     y * 2);
        if (bl) stack.push(bl, z + 1, x * 2,     y * 2 + 1);
        if (tr) stack.push(tr, z + 1, x * 2 + 1, y * 2);
        if (br) stack.push(br, z + 1, x * 2 + 1, y * 2 + 1);
    }
};

GeoJSONVT.prototype.getTile = function (z, x, y) {
    var options = this.options,
        extent = options.extent,
        debug = options.debug;

    var z2 = 1 << z;
    x = ((x % z2) + z2) % z2; // wrap tile x coordinate

    var id = toID(z, x, y);
    if (this.tiles[id]) return transformTile(this.tiles[id], extent);

    if (debug > 1) console.log('drilling down to z%d-%d-%d', z, x, y);

    var z0 = z,
        x0 = x,
        y0 = y,
        parent;

    while (!parent && z0 > 0) {
        z0--;
        x0 = Math.floor(x0 / 2);
        y0 = Math.floor(y0 / 2);
        parent = this.tiles[toID(z0, x0, y0)];
    }

    if (!parent) return null;

    if (debug > 1) console.log('found parent tile z%d-%d-%d', z0, x0, y0);

    // if we found a parent tile containing the original geometry, we can drill down from it
    if (parent.source) {
        if (isClippedSquare(parent, extent, options.buffer)) return transformTile(parent, extent);

        if (debug > 1) console.time('drilling down');
        this.splitTile(parent.source, z0, x0, y0, z, x, y);
        if (debug > 1) console.timeEnd('drilling down');
    }

    if (!this.tiles[id]) return null;

    return transformTile(this.tiles[id], extent);
};

function transformTile(tile, extent) {
    if (tile.transformed) return tile;

    var z2 = tile.z2,
        tx = tile.x,
        ty = tile.y,
        i, j, k;

    for (i = 0; i < tile.features.length; i++) {
        var feature = tile.features[i],
            geom = feature.geometry,
            type = feature.type;

        if (type === 1) {
            for (j = 0; j < geom.length; j++) geom[j] = transformPoint(geom[j], extent, z2, tx, ty);

        } else {
            for (j = 0; j < geom.length; j++) {
                var ring = geom[j];
                for (k = 0; k < ring.length; k++) ring[k] = transformPoint(ring[k], extent, z2, tx, ty);
            }
        }
    }

    tile.transformed = true;

    return tile;
}

function transformPoint(p, extent, z2, tx, ty) {
    var x = Math.round(extent * (p[0] * z2 - tx)),
        y = Math.round(extent * (p[1] * z2 - ty));
    return [x, y];
}

function toID(z, x, y) {
    return (((1 << z) * y + x) * 32) + z;
}

function intersectX(a, b, x) {
    return [x, (x - a[0]) * (b[1] - a[1]) / (b[0] - a[0]) + a[1], 1];
}
function intersectY(a, b, y) {
    return [(y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]) + a[0], y, 1];
}

function extend(dest, src) {
    for (var i in src) dest[i] = src[i];
    return dest;
}

// checks whether a tile is a whole-area fill after clipping; if it is, there's no sense slicing it further
function isClippedSquare(tile, extent, buffer) {

    var features = tile.source;
    if (features.length !== 1) return false;

    var feature = features[0];
    if (feature.type !== 3 || feature.geometry.length > 1) return false;

    var len = feature.geometry[0].length;
    if (len !== 5) return false;

    for (var i = 0; i < len; i++) {
        var p = transformPoint(feature.geometry[0][i], extent, tile.z2, tile.x, tile.y);
        if ((p[0] !== -buffer && p[0] !== extent + buffer) ||
            (p[1] !== -buffer && p[1] !== extent + buffer)) return false;
    }

    return true;
}

},{"./clip":1,"./convert":2,"./tile":5,"./wrap":6}],4:[function(require,module,exports){
'use strict';

module.exports = simplify;

// calculate simplification data using optimized Douglas-Peucker algorithm

function simplify(points, tolerance) {

    var sqTolerance = tolerance * tolerance,
        len = points.length,
        first = 0,
        last = len - 1,
        stack = [],
        i, maxSqDist, sqDist, index;

    // always retain the endpoints (1 is the max value)
    points[first][2] = 1;
    points[last][2] = 1;

    // avoid recursion by using a stack
    while (last) {

        maxSqDist = 0;

        for (i = first + 1; i < last; i++) {
            sqDist = getSqSegDist(points[i], points[first], points[last]);

            if (sqDist > maxSqDist) {
                index = i;
                maxSqDist = sqDist;
            }
        }

        if (maxSqDist > sqTolerance) {
            points[index][2] = maxSqDist; // save the point importance in squared pixels as a z coordinate
            stack.push(first);
            stack.push(index);
            first = index;

        } else {
            last = stack.pop();
            first = stack.pop();
        }
    }
}

// square distance from a point to a segment
function getSqSegDist(p, a, b) {

    var x = a[0], y = a[1],
        bx = b[0], by = b[1],
        px = p[0], py = p[1],
        dx = bx - x,
        dy = by - y;

    if (dx !== 0 || dy !== 0) {

        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);

        if (t > 1) {
            x = bx;
            y = by;

        } else if (t > 0) {
            x += dx * t;
            y += dy * t;
        }
    }

    dx = px - x;
    dy = py - y;

    return dx * dx + dy * dy;
}

},{}],5:[function(require,module,exports){
'use strict';

module.exports = createTile;

function createTile(features, z2, tx, ty, tolerance, noSimplify) {
    var tile = {
        features: [],
        numPoints: 0,
        numSimplified: 0,
        numFeatures: 0,
        source: null,
        x: tx,
        y: ty,
        z2: z2,
        transformed: false,
        min: [2, 1],
        max: [-1, 0]
    };
    for (var i = 0; i < features.length; i++) {
        tile.numFeatures++;
        addFeature(tile, features[i], tolerance, noSimplify);

        var min = features[i].min,
            max = features[i].max;

        if (min[0] < tile.min[0]) tile.min[0] = min[0];
        if (min[1] < tile.min[1]) tile.min[1] = min[1];
        if (max[0] > tile.max[0]) tile.max[0] = max[0];
        if (max[1] > tile.max[1]) tile.max[1] = max[1];
    }
    return tile;
}

function addFeature(tile, feature, tolerance, noSimplify) {

    var geom = feature.geometry,
        type = feature.type,
        simplified = [],
        sqTolerance = tolerance * tolerance,
        i, j, ring, p;

    if (type === 1) {
        for (i = 0; i < geom.length; i++) {
            simplified.push(geom[i]);
            tile.numPoints++;
            tile.numSimplified++;
        }

    } else {

        // simplify and transform projected coordinates for tile geometry
        for (i = 0; i < geom.length; i++) {
            ring = geom[i];

            // filter out tiny polylines & polygons
            if (!noSimplify && ((type === 2 && ring.dist < tolerance) ||
                                (type === 3 && ring.area < sqTolerance))) {
                tile.numPoints += ring.length;
                continue;
            }

            var simplifiedRing = [];

            for (j = 0; j < ring.length; j++) {
                p = ring[j];
                // keep points with importance > tolerance
                if (noSimplify || p[2] > sqTolerance) {
                    simplifiedRing.push(p);
                    tile.numSimplified++;
                }
                tile.numPoints++;
            }

            simplified.push(simplifiedRing);
        }
    }

    if (simplified.length) {
        tile.features.push({
            geometry: simplified,
            type: type,
            tags: feature.tags || null
        });
    }
}

},{}],6:[function(require,module,exports){
'use strict';

var clip = require('./clip');

module.exports = wrap;

function wrap(features, buffer, intersectX) {
    var merged = features,
        left  = clip(features, 1, -1 - buffer, buffer,     0, intersectX, -1, 2), // left world copy
        right = clip(features, 1,  1 - buffer, 2 + buffer, 0, intersectX, -1, 2); // right world copy

    if (left || right) {
        merged = clip(features, 1, -buffer, 1 + buffer, 0, intersectX, -1, 2); // center world copy

        if (left) merged = shiftFeatureCoords(left, 1).concat(merged); // merge left into center
        if (right) merged = merged.concat(shiftFeatureCoords(right, -1)); // merge right into center
    }

    return merged;
}

function shiftFeatureCoords(features, offset) {
    var newFeatures = [];

    for (var i = 0; i < features.length; i++) {
        var feature = features[i],
            type = feature.type;

        var newGeometry;

        if (type === 1) {
            newGeometry = shiftCoords(feature.geometry, offset);
        } else {
            newGeometry = [];
            for (var j = 0; j < feature.geometry.length; j++) {
                newGeometry.push(shiftCoords(feature.geometry[j], offset));
            }
        }

        newFeatures.push({
            geometry: newGeometry,
            type: type,
            tags: feature.tags,
            min: [feature.min[0] + offset, feature.min[1]],
            max: [feature.max[0] + offset, feature.max[1]]
        });
    }

    return newFeatures;
}

function shiftCoords(points, offset) {
    var newPoints = [];
    newPoints.area = points.area;
    newPoints.dist = points.dist;

    for (var i = 0; i < points.length; i++) {
        newPoints.push([points[i][0] + offset, points[i][1], points[i][2]]);
    }
    return newPoints;
}

},{"./clip":1}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2xpcC5qcyIsInNyYy9jb252ZXJ0LmpzIiwic3JjL2luZGV4LmpzIiwic3JjL3NpbXBsaWZ5LmpzIiwic3JjL3RpbGUuanMiLCJzcmMvd3JhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsaXA7XG5cbi8qIGNsaXAgZmVhdHVyZXMgYmV0d2VlbiB0d28gYXhpcy1wYXJhbGxlbCBsaW5lczpcbiAqICAgICB8ICAgICAgICB8XG4gKiAgX19ffF9fXyAgICAgfCAgICAgL1xuICogLyAgIHwgICBcXF9fX198X19fXy9cbiAqICAgICB8ICAgICAgICB8XG4gKi9cblxuZnVuY3Rpb24gY2xpcChmZWF0dXJlcywgc2NhbGUsIGsxLCBrMiwgYXhpcywgaW50ZXJzZWN0LCBtaW5BbGwsIG1heEFsbCkge1xuXG4gICAgazEgLz0gc2NhbGU7XG4gICAgazIgLz0gc2NhbGU7XG5cbiAgICBpZiAobWluQWxsID49IGsxICYmIG1heEFsbCA8PSBrMikgcmV0dXJuIGZlYXR1cmVzOyAvLyB0cml2aWFsIGFjY2VwdFxuICAgIGVsc2UgaWYgKG1pbkFsbCA+IGsyIHx8IG1heEFsbCA8IGsxKSByZXR1cm4gbnVsbDsgLy8gdHJpdmlhbCByZWplY3RcblxuICAgIHZhciBjbGlwcGVkID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIGZlYXR1cmUgPSBmZWF0dXJlc1tpXSxcbiAgICAgICAgICAgIGdlb21ldHJ5ID0gZmVhdHVyZS5nZW9tZXRyeSxcbiAgICAgICAgICAgIHR5cGUgPSBmZWF0dXJlLnR5cGUsXG4gICAgICAgICAgICBtaW4sIG1heDtcblxuICAgICAgICBtaW4gPSBmZWF0dXJlLm1pbltheGlzXTtcbiAgICAgICAgbWF4ID0gZmVhdHVyZS5tYXhbYXhpc107XG5cbiAgICAgICAgaWYgKG1pbiA+PSBrMSAmJiBtYXggPD0gazIpIHsgLy8gdHJpdmlhbCBhY2NlcHRcbiAgICAgICAgICAgIGNsaXBwZWQucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG1pbiA+IGsyIHx8IG1heCA8IGsxKSBjb250aW51ZTsgLy8gdHJpdmlhbCByZWplY3RcblxuICAgICAgICB2YXIgc2xpY2VzID0gdHlwZSA9PT0gMSA/XG4gICAgICAgICAgICAgICAgY2xpcFBvaW50cyhnZW9tZXRyeSwgazEsIGsyLCBheGlzKSA6XG4gICAgICAgICAgICAgICAgY2xpcEdlb21ldHJ5KGdlb21ldHJ5LCBrMSwgazIsIGF4aXMsIGludGVyc2VjdCwgdHlwZSA9PT0gMyk7XG5cbiAgICAgICAgaWYgKHNsaWNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGlmIGEgZmVhdHVyZSBnb3QgY2xpcHBlZCwgaXQgd2lsbCBsaWtlbHkgZ2V0IGNsaXBwZWQgb24gdGhlIG5leHQgem9vbSBsZXZlbCBhcyB3ZWxsLFxuICAgICAgICAgICAgLy8gc28gdGhlcmUncyBubyBuZWVkIHRvIHJlY2FsY3VsYXRlIGJib3hlc1xuICAgICAgICAgICAgY2xpcHBlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogc2xpY2VzLFxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgdGFnczogZmVhdHVyZXNbaV0udGFncyB8fCBudWxsLFxuICAgICAgICAgICAgICAgIG1pbjogZmVhdHVyZS5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBmZWF0dXJlLm1heFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xpcHBlZC5sZW5ndGggPyBjbGlwcGVkIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gY2xpcFBvaW50cyhnZW9tZXRyeSwgazEsIGsyLCBheGlzKSB7XG4gICAgdmFyIHNsaWNlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdlb21ldHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhID0gZ2VvbWV0cnlbaV0sXG4gICAgICAgICAgICBhayA9IGFbYXhpc107XG5cbiAgICAgICAgaWYgKGFrID49IGsxICYmIGFrIDw9IGsyKSBzbGljZS5wdXNoKGEpO1xuICAgIH1cbiAgICByZXR1cm4gc2xpY2U7XG59XG5cbmZ1bmN0aW9uIGNsaXBHZW9tZXRyeShnZW9tZXRyeSwgazEsIGsyLCBheGlzLCBpbnRlcnNlY3QsIGNsb3NlZCkge1xuXG4gICAgdmFyIHNsaWNlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnZW9tZXRyeS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIHZhciBhayA9IDAsXG4gICAgICAgICAgICBiayA9IDAsXG4gICAgICAgICAgICBiID0gbnVsbCxcbiAgICAgICAgICAgIHBvaW50cyA9IGdlb21ldHJ5W2ldLFxuICAgICAgICAgICAgYXJlYSA9IHBvaW50cy5hcmVhLFxuICAgICAgICAgICAgZGlzdCA9IHBvaW50cy5kaXN0LFxuICAgICAgICAgICAgbGVuID0gcG9pbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGEsIGosIGxhc3Q7XG5cbiAgICAgICAgdmFyIHNsaWNlID0gW107XG5cbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGxlbiAtIDE7IGorKykge1xuICAgICAgICAgICAgYSA9IGIgfHwgcG9pbnRzW2pdO1xuICAgICAgICAgICAgYiA9IHBvaW50c1tqICsgMV07XG4gICAgICAgICAgICBhayA9IGJrIHx8IGFbYXhpc107XG4gICAgICAgICAgICBiayA9IGJbYXhpc107XG5cbiAgICAgICAgICAgIGlmIChhayA8IGsxKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoKGJrID4gazIpKSB7IC8vIC0tLXwtLS0tLXwtLT5cbiAgICAgICAgICAgICAgICAgICAgc2xpY2UucHVzaChpbnRlcnNlY3QoYSwgYiwgazEpLCBpbnRlcnNlY3QoYSwgYiwgazIpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZWQpIHNsaWNlID0gbmV3U2xpY2Uoc2xpY2VzLCBzbGljZSwgYXJlYSwgZGlzdCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJrID49IGsxKSBzbGljZS5wdXNoKGludGVyc2VjdChhLCBiLCBrMSkpOyAvLyAtLS18LS0+ICB8XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWsgPiBrMikge1xuXG4gICAgICAgICAgICAgICAgaWYgKChiayA8IGsxKSkgeyAvLyA8LS18LS0tLS18LS0tXG4gICAgICAgICAgICAgICAgICAgIHNsaWNlLnB1c2goaW50ZXJzZWN0KGEsIGIsIGsyKSwgaW50ZXJzZWN0KGEsIGIsIGsxKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkKSBzbGljZSA9IG5ld1NsaWNlKHNsaWNlcywgc2xpY2UsIGFyZWEsIGRpc3QpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiayA8PSBrMikgc2xpY2UucHVzaChpbnRlcnNlY3QoYSwgYiwgazIpKTsgLy8gfCAgPC0tfC0tLVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgc2xpY2UucHVzaChhKTtcblxuICAgICAgICAgICAgICAgIGlmIChiayA8IGsxKSB7IC8vIDwtLXwtLS0gIHxcbiAgICAgICAgICAgICAgICAgICAgc2xpY2UucHVzaChpbnRlcnNlY3QoYSwgYiwgazEpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZWQpIHNsaWNlID0gbmV3U2xpY2Uoc2xpY2VzLCBzbGljZSwgYXJlYSwgZGlzdCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJrID4gazIpIHsgLy8gfCAgLS0tfC0tPlxuICAgICAgICAgICAgICAgICAgICBzbGljZS5wdXNoKGludGVyc2VjdChhLCBiLCBrMikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsb3NlZCkgc2xpY2UgPSBuZXdTbGljZShzbGljZXMsIHNsaWNlLCBhcmVhLCBkaXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfCAtLT4gfFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHRoZSBsYXN0IHBvaW50XG4gICAgICAgIGEgPSBwb2ludHNbbGVuIC0gMV07XG4gICAgICAgIGFrID0gYVtheGlzXTtcbiAgICAgICAgaWYgKGFrID49IGsxICYmIGFrIDw9IGsyKSBzbGljZS5wdXNoKGEpO1xuXG4gICAgICAgIC8vIGNsb3NlIHRoZSBwb2x5Z29uIGlmIGl0cyBlbmRwb2ludHMgYXJlIG5vdCB0aGUgc2FtZSBhZnRlciBjbGlwcGluZ1xuXG4gICAgICAgIGxhc3QgPSBzbGljZVtzbGljZS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGNsb3NlZCAmJiBsYXN0ICYmIChzbGljZVswXVswXSAhPT0gbGFzdFswXSB8fCBzbGljZVswXVsxXSAhPT0gbGFzdFsxXSkpIHNsaWNlLnB1c2goc2xpY2VbMF0pO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgZmluYWwgc2xpY2VcbiAgICAgICAgbmV3U2xpY2Uoc2xpY2VzLCBzbGljZSwgYXJlYSwgZGlzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNsaWNlcztcbn1cblxuZnVuY3Rpb24gbmV3U2xpY2Uoc2xpY2VzLCBzbGljZSwgYXJlYSwgZGlzdCkge1xuICAgIGlmIChzbGljZS5sZW5ndGgpIHtcbiAgICAgICAgLy8gd2UgZG9uJ3QgcmVjYWxjdWxhdGUgdGhlIGFyZWEvbGVuZ3RoIG9mIHRoZSB1bmNsaXBwZWQgZ2VvbWV0cnkgYmVjYXVzZSB0aGUgY2FzZSB3aGVyZSBpdCBnb2VzXG4gICAgICAgIC8vIGJlbG93IHRoZSB2aXNpYmlsaXR5IHRocmVzaG9sZCBhcyBhIHJlc3VsdCBvZiBjbGlwcGluZyBpcyByYXJlLCBzbyB3ZSBhdm9pZCBkb2luZyB1bm5lY2Vzc2FyeSB3b3JrXG4gICAgICAgIHNsaWNlLmFyZWEgPSBhcmVhO1xuICAgICAgICBzbGljZS5kaXN0ID0gZGlzdDtcblxuICAgICAgICBzbGljZXMucHVzaChzbGljZSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuXG52YXIgc2ltcGxpZnkgPSByZXF1aXJlKCcuL3NpbXBsaWZ5Jyk7XG5cbi8vIGNvbnZlcnRzIEdlb0pTT04gZmVhdHVyZSBpbnRvIGFuIGludGVybWVkaWF0ZSBwcm9qZWN0ZWQgSlNPTiB2ZWN0b3IgZm9ybWF0IHdpdGggc2ltcGxpZmljYXRpb24gZGF0YVxuXG5mdW5jdGlvbiBjb252ZXJ0KGRhdGEsIHRvbGVyYW5jZSkge1xuICAgIHZhciBmZWF0dXJlcyA9IFtdO1xuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ0ZlYXR1cmVDb2xsZWN0aW9uJykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnZlcnRGZWF0dXJlKGZlYXR1cmVzLCBkYXRhLmZlYXR1cmVzW2ldLCB0b2xlcmFuY2UpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdGZWF0dXJlJykge1xuICAgICAgICBjb252ZXJ0RmVhdHVyZShmZWF0dXJlcywgZGF0YSwgdG9sZXJhbmNlKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNpbmdsZSBnZW9tZXRyeSBvciBhIGdlb21ldHJ5IGNvbGxlY3Rpb25cbiAgICAgICAgY29udmVydEZlYXR1cmUoZmVhdHVyZXMsIHtnZW9tZXRyeTogZGF0YX0sIHRvbGVyYW5jZSk7XG4gICAgfVxuICAgIHJldHVybiBmZWF0dXJlcztcbn1cblxuZnVuY3Rpb24gY29udmVydEZlYXR1cmUoZmVhdHVyZXMsIGZlYXR1cmUsIHRvbGVyYW5jZSkge1xuICAgIHZhciBnZW9tID0gZmVhdHVyZS5nZW9tZXRyeSxcbiAgICAgICAgdHlwZSA9IGdlb20udHlwZSxcbiAgICAgICAgY29vcmRzID0gZ2VvbS5jb29yZGluYXRlcyxcbiAgICAgICAgdGFncyA9IGZlYXR1cmUucHJvcGVydGllcyxcbiAgICAgICAgaSwgaiwgcmluZ3M7XG5cbiAgICBpZiAodHlwZSA9PT0gJ1BvaW50Jykge1xuICAgICAgICBmZWF0dXJlcy5wdXNoKGNyZWF0ZSh0YWdzLCAxLCBbcHJvamVjdFBvaW50KGNvb3JkcyldKSk7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdNdWx0aVBvaW50Jykge1xuICAgICAgICBmZWF0dXJlcy5wdXNoKGNyZWF0ZSh0YWdzLCAxLCBwcm9qZWN0KGNvb3JkcykpKTtcblxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0xpbmVTdHJpbmcnKSB7XG4gICAgICAgIGZlYXR1cmVzLnB1c2goY3JlYXRlKHRhZ3MsIDIsIFtwcm9qZWN0KGNvb3JkcywgdG9sZXJhbmNlKV0pKTtcblxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ011bHRpTGluZVN0cmluZycgfHwgdHlwZSA9PT0gJ1BvbHlnb24nKSB7XG4gICAgICAgIHJpbmdzID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJpbmdzLnB1c2gocHJvamVjdChjb29yZHNbaV0sIHRvbGVyYW5jZSkpO1xuICAgICAgICB9XG4gICAgICAgIGZlYXR1cmVzLnB1c2goY3JlYXRlKHRhZ3MsIHR5cGUgPT09ICdQb2x5Z29uJyA/IDMgOiAyLCByaW5ncykpO1xuXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnTXVsdGlQb2x5Z29uJykge1xuICAgICAgICByaW5ncyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY29vcmRzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcmluZ3MucHVzaChwcm9qZWN0KGNvb3Jkc1tpXVtqXSwgdG9sZXJhbmNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmVhdHVyZXMucHVzaChjcmVhdGUodGFncywgMywgcmluZ3MpKTtcblxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0dlb21ldHJ5Q29sbGVjdGlvbicpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGdlb20uZ2VvbWV0cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udmVydEZlYXR1cmUoZmVhdHVyZXMsIHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogZ2VvbS5nZW9tZXRyaWVzW2ldLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRhZ3NcbiAgICAgICAgICAgIH0sIHRvbGVyYW5jZSk7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW5wdXQgZGF0YSBpcyBub3QgYSB2YWxpZCBHZW9KU09OIG9iamVjdC4nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSh0YWdzLCB0eXBlLCBnZW9tZXRyeSkge1xuICAgIHZhciBmZWF0dXJlID0ge1xuICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cnksXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHRhZ3M6IHRhZ3MgfHwgbnVsbCxcbiAgICAgICAgbWluOiBbMiwgMV0sIC8vIGluaXRpYWwgYmJveCB2YWx1ZXM7XG4gICAgICAgIG1heDogWy0xLCAwXSAgLy8gbm90ZSB0aGF0IGNvb3JkcyBhcmUgdXN1YWxseSBpbiBbMC4uMV0gcmFuZ2VcbiAgICB9O1xuICAgIGNhbGNCQm94KGZlYXR1cmUpO1xuICAgIHJldHVybiBmZWF0dXJlO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0KGxvbmxhdHMsIHRvbGVyYW5jZSkge1xuICAgIHZhciBwcm9qZWN0ZWQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvbmxhdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvamVjdGVkLnB1c2gocHJvamVjdFBvaW50KGxvbmxhdHNbaV0pKTtcbiAgICB9XG4gICAgaWYgKHRvbGVyYW5jZSkge1xuICAgICAgICBzaW1wbGlmeShwcm9qZWN0ZWQsIHRvbGVyYW5jZSk7XG4gICAgICAgIGNhbGNTaXplKHByb2plY3RlZCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0ZWQ7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RQb2ludChwKSB7XG4gICAgdmFyIHNpbiA9IE1hdGguc2luKHBbMV0gKiBNYXRoLlBJIC8gMTgwKSxcbiAgICAgICAgeCA9IChwWzBdIC8gMzYwICsgMC41KSxcbiAgICAgICAgeSA9ICgwLjUgLSAwLjI1ICogTWF0aC5sb2coKDEgKyBzaW4pIC8gKDEgLSBzaW4pKSAvIE1hdGguUEkpO1xuXG4gICAgeSA9IHkgPCAtMSA/IC0xIDpcbiAgICAgICAgeSA+IDEgPyAxIDogeTtcblxuICAgIHJldHVybiBbeCwgeSwgMF07XG59XG5cbi8vIGNhbGN1bGF0ZSBhcmVhIGFuZCBsZW5ndGggb2YgdGhlIHBvbHlcbmZ1bmN0aW9uIGNhbGNTaXplKHBvaW50cykge1xuICAgIHZhciBhcmVhID0gMCxcbiAgICAgICAgZGlzdCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgYSwgYjsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgYSA9IGIgfHwgcG9pbnRzW2ldO1xuICAgICAgICBiID0gcG9pbnRzW2kgKyAxXTtcblxuICAgICAgICBhcmVhICs9IGFbMF0gKiBiWzFdIC0gYlswXSAqIGFbMV07XG5cbiAgICAgICAgLy8gdXNlIE1hbmhhdHRhbiBkaXN0YW5jZSBpbnN0ZWFkIG9mIEV1Y2xpZGlhbiBvbmUgdG8gYXZvaWQgZXhwZW5zaXZlIHNxdWFyZSByb290IGNvbXB1dGF0aW9uXG4gICAgICAgIGRpc3QgKz0gTWF0aC5hYnMoYlswXSAtIGFbMF0pICsgTWF0aC5hYnMoYlsxXSAtIGFbMV0pO1xuICAgIH1cbiAgICBwb2ludHMuYXJlYSA9IE1hdGguYWJzKGFyZWEgLyAyKTtcbiAgICBwb2ludHMuZGlzdCA9IGRpc3Q7XG59XG5cbi8vIGNhbGN1bGF0ZSB0aGUgZmVhdHVyZSBib3VuZGluZyBib3ggZm9yIGZhc3RlciBjbGlwcGluZyBsYXRlclxuZnVuY3Rpb24gY2FsY0JCb3goZmVhdHVyZSkge1xuICAgIHZhciBnZW9tZXRyeSA9IGZlYXR1cmUuZ2VvbWV0cnksXG4gICAgICAgIG1pbiA9IGZlYXR1cmUubWluLFxuICAgICAgICBtYXggPSBmZWF0dXJlLm1heDtcblxuICAgIGlmIChmZWF0dXJlLnR5cGUgPT09IDEpIGNhbGNSaW5nQkJveChtaW4sIG1heCwgZ2VvbWV0cnkpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IDA7IGkgPCBnZW9tZXRyeS5sZW5ndGg7IGkrKykgY2FsY1JpbmdCQm94KG1pbiwgbWF4LCBnZW9tZXRyeVtpXSk7XG5cbiAgICByZXR1cm4gZmVhdHVyZTtcbn1cblxuZnVuY3Rpb24gY2FsY1JpbmdCQm94KG1pbiwgbWF4LCBwb2ludHMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwID0gcG9pbnRzW2ldO1xuICAgICAgICBtaW5bMF0gPSBNYXRoLm1pbihwWzBdLCBtaW5bMF0pO1xuICAgICAgICBtYXhbMF0gPSBNYXRoLm1heChwWzBdLCBtYXhbMF0pO1xuICAgICAgICBtaW5bMV0gPSBNYXRoLm1pbihwWzFdLCBtaW5bMV0pO1xuICAgICAgICBtYXhbMV0gPSBNYXRoLm1heChwWzFdLCBtYXhbMV0pO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBnZW9qc29udnQ7XG5cbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnLi9jb252ZXJ0JyksIC8vIEdlb0pTT04gY29udmVyc2lvbiBhbmQgcHJlcHJvY2Vzc2luZ1xuICAgIGNsaXAgPSByZXF1aXJlKCcuL2NsaXAnKSwgICAgICAgLy8gc3RyaXBlIGNsaXBwaW5nIGFsZ29yaXRobVxuICAgIHdyYXAgPSByZXF1aXJlKCcuL3dyYXAnKSwgICAgICAgLy8gZGF0ZSBsaW5lIHByb2Nlc3NpbmdcbiAgICBjcmVhdGVUaWxlID0gcmVxdWlyZSgnLi90aWxlJyk7IC8vIGZpbmFsIHNpbXBsaWZpZWQgdGlsZSBnZW5lcmF0aW9uXG5cblxuZnVuY3Rpb24gZ2VvanNvbnZ0KGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEdlb0pTT05WVChkYXRhLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gR2VvSlNPTlZUKGRhdGEsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zID0gZXh0ZW5kKE9iamVjdC5jcmVhdGUodGhpcy5vcHRpb25zKSwgb3B0aW9ucyk7XG5cbiAgICB2YXIgZGVidWcgPSBvcHRpb25zLmRlYnVnO1xuXG4gICAgaWYgKGRlYnVnKSBjb25zb2xlLnRpbWUoJ3ByZXByb2Nlc3MgZGF0YScpO1xuXG4gICAgdmFyIHoyID0gMSA8PCBvcHRpb25zLm1heFpvb20sIC8vIDJeelxuICAgICAgICBmZWF0dXJlcyA9IGNvbnZlcnQoZGF0YSwgb3B0aW9ucy50b2xlcmFuY2UgLyAoejIgKiBvcHRpb25zLmV4dGVudCkpO1xuXG4gICAgdGhpcy50aWxlcyA9IHt9O1xuICAgIHRoaXMudGlsZUNvb3JkcyA9IFtdO1xuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZCgncHJlcHJvY2VzcyBkYXRhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleDogbWF4Wm9vbTogJWQsIG1heFBvaW50czogJWQnLCBvcHRpb25zLmluZGV4TWF4Wm9vbSwgb3B0aW9ucy5pbmRleE1heFBvaW50cyk7XG4gICAgICAgIGNvbnNvbGUudGltZSgnZ2VuZXJhdGUgdGlsZXMnKTtcbiAgICAgICAgdGhpcy5zdGF0cyA9IHt9O1xuICAgICAgICB0aGlzLnRvdGFsID0gMDtcbiAgICB9XG5cbiAgICBmZWF0dXJlcyA9IHdyYXAoZmVhdHVyZXMsIG9wdGlvbnMuYnVmZmVyIC8gb3B0aW9ucy5leHRlbnQsIGludGVyc2VjdFgpO1xuXG4gICAgLy8gc3RhcnQgc2xpY2luZyBmcm9tIHRoZSB0b3AgdGlsZSBkb3duXG4gICAgdGhpcy5zcGxpdFRpbGUoZmVhdHVyZXMsIDAsIDAsIDApO1xuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmZWF0dXJlczogJWQsIHBvaW50czogJWQnLCB0aGlzLnRpbGVzWzBdLm51bUZlYXR1cmVzLCB0aGlzLnRpbGVzWzBdLm51bVBvaW50cyk7XG4gICAgICAgIGNvbnNvbGUudGltZUVuZCgnZ2VuZXJhdGUgdGlsZXMnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RpbGVzIGdlbmVyYXRlZDonLCB0aGlzLnRvdGFsLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRzKSk7XG4gICAgfVxufVxuXG5HZW9KU09OVlQucHJvdG90eXBlLm9wdGlvbnMgPSB7XG4gICAgbWF4Wm9vbTogMTQsICAgICAgICAgICAgLy8gbWF4IHpvb20gdG8gcHJlc2VydmUgZGV0YWlsIG9uXG4gICAgaW5kZXhNYXhab29tOiA1LCAgICAgICAgLy8gbWF4IHpvb20gaW4gdGhlIHRpbGUgaW5kZXhcbiAgICBpbmRleE1heFBvaW50czogMTAwMDAwLCAvLyBtYXggbnVtYmVyIG9mIHBvaW50cyBwZXIgdGlsZSBpbiB0aGUgdGlsZSBpbmRleFxuICAgIHNvbGlkQ2hpbGRyZW46IGZhbHNlLCAgIC8vIHdoZXRoZXIgdG8gdGlsZSBzb2xpZCBzcXVhcmUgdGlsZXMgZnVydGhlclxuICAgIHRvbGVyYW5jZTogMywgICAgICAgICAgIC8vIHNpbXBsaWZpY2F0aW9uIHRvbGVyYW5jZSAoaGlnaGVyIG1lYW5zIHNpbXBsZXIpXG4gICAgZXh0ZW50OiA0MDk2LCAgICAgICAgICAgLy8gdGlsZSBleHRlbnRcbiAgICBidWZmZXI6IDY0LCAgICAgICAgICAgICAvLyB0aWxlIGJ1ZmZlciBvbiBlYWNoIHNpZGVcbiAgICBkZWJ1ZzogMCAgICAgICAgICAgICAgICAvLyBsb2dnaW5nIGxldmVsICgwLCAxIG9yIDIpXG59O1xuXG5HZW9KU09OVlQucHJvdG90eXBlLnNwbGl0VGlsZSA9IGZ1bmN0aW9uIChmZWF0dXJlcywgeiwgeCwgeSwgY3osIGN4LCBjeSkge1xuXG4gICAgdmFyIHN0YWNrID0gW2ZlYXR1cmVzLCB6LCB4LCB5XSxcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgZGVidWcgPSBvcHRpb25zLmRlYnVnO1xuXG4gICAgLy8gYXZvaWQgcmVjdXJzaW9uIGJ5IHVzaW5nIGEgcHJvY2Vzc2luZyBxdWV1ZVxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgeSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICB4ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIHogPSBzdGFjay5wb3AoKTtcbiAgICAgICAgZmVhdHVyZXMgPSBzdGFjay5wb3AoKTtcblxuICAgICAgICB2YXIgejIgPSAxIDw8IHosXG4gICAgICAgICAgICBpZCA9IHRvSUQoeiwgeCwgeSksXG4gICAgICAgICAgICB0aWxlID0gdGhpcy50aWxlc1tpZF0sXG4gICAgICAgICAgICB0aWxlVG9sZXJhbmNlID0geiA9PT0gb3B0aW9ucy5tYXhab29tID8gMCA6IG9wdGlvbnMudG9sZXJhbmNlIC8gKHoyICogb3B0aW9ucy5leHRlbnQpO1xuXG4gICAgICAgIGlmICghdGlsZSkge1xuICAgICAgICAgICAgaWYgKGRlYnVnID4gMSkgY29uc29sZS50aW1lKCdjcmVhdGlvbicpO1xuXG4gICAgICAgICAgICB0aWxlID0gdGhpcy50aWxlc1tpZF0gPSBjcmVhdGVUaWxlKGZlYXR1cmVzLCB6MiwgeCwgeSwgdGlsZVRvbGVyYW5jZSwgeiA9PT0gb3B0aW9ucy5tYXhab29tKTtcbiAgICAgICAgICAgIHRoaXMudGlsZUNvb3Jkcy5wdXNoKHt6OiB6LCB4OiB4LCB5OiB5fSk7XG5cbiAgICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1ZyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbGUgeiVkLSVkLSVkIChmZWF0dXJlczogJWQsIHBvaW50czogJWQsIHNpbXBsaWZpZWQ6ICVkKScsXG4gICAgICAgICAgICAgICAgICAgICAgICB6LCB4LCB5LCB0aWxlLm51bUZlYXR1cmVzLCB0aWxlLm51bVBvaW50cywgdGlsZS5udW1TaW1wbGlmaWVkKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS50aW1lRW5kKCdjcmVhdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gJ3onICsgejtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRzW2tleV0gPSAodGhpcy5zdGF0c1trZXldIHx8IDApICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBnZW9tZXRyeSBpbiB0aWxlIHNvIHRoYXQgd2UgY2FuIGRyaWxsIGRvd24gbGF0ZXIgaWYgd2Ugc3RvcCBub3dcbiAgICAgICAgdGlsZS5zb3VyY2UgPSBmZWF0dXJlcztcblxuICAgICAgICAvLyBzdG9wIHRpbGluZyBpZiB0aGUgdGlsZSBpcyBzb2xpZCBjbGlwcGVkIHNxdWFyZVxuICAgICAgICBpZiAoIW9wdGlvbnMuc29saWRDaGlsZHJlbiAmJiBpc0NsaXBwZWRTcXVhcmUodGlsZSwgb3B0aW9ucy5leHRlbnQsIG9wdGlvbnMuYnVmZmVyKSkgY29udGludWU7XG5cbiAgICAgICAgLy8gaWYgaXQncyB0aGUgZmlyc3QtcGFzcyB0aWxpbmdcbiAgICAgICAgaWYgKCFjeikge1xuICAgICAgICAgICAgLy8gc3RvcCB0aWxpbmcgaWYgd2UgcmVhY2hlZCBtYXggem9vbSwgb3IgaWYgdGhlIHRpbGUgaXMgdG9vIHNpbXBsZVxuICAgICAgICAgICAgaWYgKHogPT09IG9wdGlvbnMuaW5kZXhNYXhab29tIHx8IHRpbGUubnVtUG9pbnRzIDw9IG9wdGlvbnMuaW5kZXhNYXhQb2ludHMpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIGlmIGEgZHJpbGxkb3duIHRvIGEgc3BlY2lmaWMgdGlsZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc3RvcCB0aWxpbmcgaWYgd2UgcmVhY2hlZCBiYXNlIHpvb20gb3Igb3VyIHRhcmdldCB0aWxlIHpvb21cbiAgICAgICAgICAgIGlmICh6ID09PSBvcHRpb25zLm1heFpvb20gfHwgeiA9PT0gY3opIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBzdG9wIHRpbGluZyBpZiBpdCdzIG5vdCBhbiBhbmNlc3RvciBvZiB0aGUgdGFyZ2V0IHRpbGVcbiAgICAgICAgICAgIHZhciBtID0gMSA8PCAoY3ogLSB6KTtcbiAgICAgICAgICAgIGlmICh4ICE9PSBNYXRoLmZsb29yKGN4IC8gbSkgJiYgeSAhPT0gTWF0aC5mbG9vcihjeSAvIG0pKSBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHdlIHNsaWNlIGZ1cnRoZXIgZG93biwgbm8gbmVlZCB0byBrZWVwIHNvdXJjZSBnZW9tZXRyeVxuICAgICAgICB0aWxlLnNvdXJjZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGRlYnVnID4gMSkgY29uc29sZS50aW1lKCdjbGlwcGluZycpO1xuXG4gICAgICAgIC8vIHZhbHVlcyB3ZSdsbCB1c2UgZm9yIGNsaXBwaW5nXG4gICAgICAgIHZhciBrMSA9IDAuNSAqIG9wdGlvbnMuYnVmZmVyIC8gb3B0aW9ucy5leHRlbnQsXG4gICAgICAgICAgICBrMiA9IDAuNSAtIGsxLFxuICAgICAgICAgICAgazMgPSAwLjUgKyBrMSxcbiAgICAgICAgICAgIGs0ID0gMSArIGsxLFxuICAgICAgICAgICAgdGwsIGJsLCB0ciwgYnIsIGxlZnQsIHJpZ2h0O1xuXG4gICAgICAgIHRsID0gYmwgPSB0ciA9IGJyID0gbnVsbDtcblxuICAgICAgICBsZWZ0ICA9IGNsaXAoZmVhdHVyZXMsIHoyLCB4IC0gazEsIHggKyBrMywgMCwgaW50ZXJzZWN0WCwgdGlsZS5taW5bMF0sIHRpbGUubWF4WzBdKTtcbiAgICAgICAgcmlnaHQgPSBjbGlwKGZlYXR1cmVzLCB6MiwgeCArIGsyLCB4ICsgazQsIDAsIGludGVyc2VjdFgsIHRpbGUubWluWzBdLCB0aWxlLm1heFswXSk7XG5cbiAgICAgICAgaWYgKGxlZnQpIHtcbiAgICAgICAgICAgIHRsID0gY2xpcChsZWZ0LCB6MiwgeSAtIGsxLCB5ICsgazMsIDEsIGludGVyc2VjdFksIHRpbGUubWluWzFdLCB0aWxlLm1heFsxXSk7XG4gICAgICAgICAgICBibCA9IGNsaXAobGVmdCwgejIsIHkgKyBrMiwgeSArIGs0LCAxLCBpbnRlcnNlY3RZLCB0aWxlLm1pblsxXSwgdGlsZS5tYXhbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJpZ2h0KSB7XG4gICAgICAgICAgICB0ciA9IGNsaXAocmlnaHQsIHoyLCB5IC0gazEsIHkgKyBrMywgMSwgaW50ZXJzZWN0WSwgdGlsZS5taW5bMV0sIHRpbGUubWF4WzFdKTtcbiAgICAgICAgICAgIGJyID0gY2xpcChyaWdodCwgejIsIHkgKyBrMiwgeSArIGs0LCAxLCBpbnRlcnNlY3RZLCB0aWxlLm1pblsxXSwgdGlsZS5tYXhbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlYnVnID4gMSkgY29uc29sZS50aW1lRW5kKCdjbGlwcGluZycpO1xuXG4gICAgICAgIGlmICh0bCkgc3RhY2sucHVzaCh0bCwgeiArIDEsIHggKiAyLCAgICAgeSAqIDIpO1xuICAgICAgICBpZiAoYmwpIHN0YWNrLnB1c2goYmwsIHogKyAxLCB4ICogMiwgICAgIHkgKiAyICsgMSk7XG4gICAgICAgIGlmICh0cikgc3RhY2sucHVzaCh0ciwgeiArIDEsIHggKiAyICsgMSwgeSAqIDIpO1xuICAgICAgICBpZiAoYnIpIHN0YWNrLnB1c2goYnIsIHogKyAxLCB4ICogMiArIDEsIHkgKiAyICsgMSk7XG4gICAgfVxufTtcblxuR2VvSlNPTlZULnByb3RvdHlwZS5nZXRUaWxlID0gZnVuY3Rpb24gKHosIHgsIHkpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgZXh0ZW50ID0gb3B0aW9ucy5leHRlbnQsXG4gICAgICAgIGRlYnVnID0gb3B0aW9ucy5kZWJ1ZztcblxuICAgIHZhciB6MiA9IDEgPDwgejtcbiAgICB4ID0gKCh4ICUgejIpICsgejIpICUgejI7IC8vIHdyYXAgdGlsZSB4IGNvb3JkaW5hdGVcblxuICAgIHZhciBpZCA9IHRvSUQoeiwgeCwgeSk7XG4gICAgaWYgKHRoaXMudGlsZXNbaWRdKSByZXR1cm4gdHJhbnNmb3JtVGlsZSh0aGlzLnRpbGVzW2lkXSwgZXh0ZW50KTtcblxuICAgIGlmIChkZWJ1ZyA+IDEpIGNvbnNvbGUubG9nKCdkcmlsbGluZyBkb3duIHRvIHolZC0lZC0lZCcsIHosIHgsIHkpO1xuXG4gICAgdmFyIHowID0geixcbiAgICAgICAgeDAgPSB4LFxuICAgICAgICB5MCA9IHksXG4gICAgICAgIHBhcmVudDtcblxuICAgIHdoaWxlICghcGFyZW50ICYmIHowID4gMCkge1xuICAgICAgICB6MC0tO1xuICAgICAgICB4MCA9IE1hdGguZmxvb3IoeDAgLyAyKTtcbiAgICAgICAgeTAgPSBNYXRoLmZsb29yKHkwIC8gMik7XG4gICAgICAgIHBhcmVudCA9IHRoaXMudGlsZXNbdG9JRCh6MCwgeDAsIHkwKV07XG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGRlYnVnID4gMSkgY29uc29sZS5sb2coJ2ZvdW5kIHBhcmVudCB0aWxlIHolZC0lZC0lZCcsIHowLCB4MCwgeTApO1xuXG4gICAgLy8gaWYgd2UgZm91bmQgYSBwYXJlbnQgdGlsZSBjb250YWluaW5nIHRoZSBvcmlnaW5hbCBnZW9tZXRyeSwgd2UgY2FuIGRyaWxsIGRvd24gZnJvbSBpdFxuICAgIGlmIChwYXJlbnQuc291cmNlKSB7XG4gICAgICAgIGlmIChpc0NsaXBwZWRTcXVhcmUocGFyZW50LCBleHRlbnQsIG9wdGlvbnMuYnVmZmVyKSkgcmV0dXJuIHRyYW5zZm9ybVRpbGUocGFyZW50LCBleHRlbnQpO1xuXG4gICAgICAgIGlmIChkZWJ1ZyA+IDEpIGNvbnNvbGUudGltZSgnZHJpbGxpbmcgZG93bicpO1xuICAgICAgICB0aGlzLnNwbGl0VGlsZShwYXJlbnQuc291cmNlLCB6MCwgeDAsIHkwLCB6LCB4LCB5KTtcbiAgICAgICAgaWYgKGRlYnVnID4gMSkgY29uc29sZS50aW1lRW5kKCdkcmlsbGluZyBkb3duJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnRpbGVzW2lkXSkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtVGlsZSh0aGlzLnRpbGVzW2lkXSwgZXh0ZW50KTtcbn07XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRpbGUodGlsZSwgZXh0ZW50KSB7XG4gICAgaWYgKHRpbGUudHJhbnNmb3JtZWQpIHJldHVybiB0aWxlO1xuXG4gICAgdmFyIHoyID0gdGlsZS56MixcbiAgICAgICAgdHggPSB0aWxlLngsXG4gICAgICAgIHR5ID0gdGlsZS55LFxuICAgICAgICBpLCBqLCBrO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRpbGUuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGZlYXR1cmUgPSB0aWxlLmZlYXR1cmVzW2ldLFxuICAgICAgICAgICAgZ2VvbSA9IGZlYXR1cmUuZ2VvbWV0cnksXG4gICAgICAgICAgICB0eXBlID0gZmVhdHVyZS50eXBlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAxKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZ2VvbS5sZW5ndGg7IGorKykgZ2VvbVtqXSA9IHRyYW5zZm9ybVBvaW50KGdlb21bal0sIGV4dGVudCwgejIsIHR4LCB0eSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBnZW9tLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJpbmcgPSBnZW9tW2pdO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCByaW5nLmxlbmd0aDsgaysrKSByaW5nW2tdID0gdHJhbnNmb3JtUG9pbnQocmluZ1trXSwgZXh0ZW50LCB6MiwgdHgsIHR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRpbGUudHJhbnNmb3JtZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRpbGU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KHAsIGV4dGVudCwgejIsIHR4LCB0eSkge1xuICAgIHZhciB4ID0gTWF0aC5yb3VuZChleHRlbnQgKiAocFswXSAqIHoyIC0gdHgpKSxcbiAgICAgICAgeSA9IE1hdGgucm91bmQoZXh0ZW50ICogKHBbMV0gKiB6MiAtIHR5KSk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbn1cblxuZnVuY3Rpb24gdG9JRCh6LCB4LCB5KSB7XG4gICAgcmV0dXJuICgoKDEgPDwgeikgKiB5ICsgeCkgKiAzMikgKyB6O1xufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3RYKGEsIGIsIHgpIHtcbiAgICByZXR1cm4gW3gsICh4IC0gYVswXSkgKiAoYlsxXSAtIGFbMV0pIC8gKGJbMF0gLSBhWzBdKSArIGFbMV0sIDFdO1xufVxuZnVuY3Rpb24gaW50ZXJzZWN0WShhLCBiLCB5KSB7XG4gICAgcmV0dXJuIFsoeSAtIGFbMV0pICogKGJbMF0gLSBhWzBdKSAvIChiWzFdIC0gYVsxXSkgKyBhWzBdLCB5LCAxXTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKGRlc3QsIHNyYykge1xuICAgIGZvciAodmFyIGkgaW4gc3JjKSBkZXN0W2ldID0gc3JjW2ldO1xuICAgIHJldHVybiBkZXN0O1xufVxuXG4vLyBjaGVja3Mgd2hldGhlciBhIHRpbGUgaXMgYSB3aG9sZS1hcmVhIGZpbGwgYWZ0ZXIgY2xpcHBpbmc7IGlmIGl0IGlzLCB0aGVyZSdzIG5vIHNlbnNlIHNsaWNpbmcgaXQgZnVydGhlclxuZnVuY3Rpb24gaXNDbGlwcGVkU3F1YXJlKHRpbGUsIGV4dGVudCwgYnVmZmVyKSB7XG5cbiAgICB2YXIgZmVhdHVyZXMgPSB0aWxlLnNvdXJjZTtcbiAgICBpZiAoZmVhdHVyZXMubGVuZ3RoICE9PSAxKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgZmVhdHVyZSA9IGZlYXR1cmVzWzBdO1xuICAgIGlmIChmZWF0dXJlLnR5cGUgIT09IDMgfHwgZmVhdHVyZS5nZW9tZXRyeS5sZW5ndGggPiAxKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuID0gZmVhdHVyZS5nZW9tZXRyeVswXS5sZW5ndGg7XG4gICAgaWYgKGxlbiAhPT0gNSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgcCA9IHRyYW5zZm9ybVBvaW50KGZlYXR1cmUuZ2VvbWV0cnlbMF1baV0sIGV4dGVudCwgdGlsZS56MiwgdGlsZS54LCB0aWxlLnkpO1xuICAgICAgICBpZiAoKHBbMF0gIT09IC1idWZmZXIgJiYgcFswXSAhPT0gZXh0ZW50ICsgYnVmZmVyKSB8fFxuICAgICAgICAgICAgKHBbMV0gIT09IC1idWZmZXIgJiYgcFsxXSAhPT0gZXh0ZW50ICsgYnVmZmVyKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXBsaWZ5O1xuXG4vLyBjYWxjdWxhdGUgc2ltcGxpZmljYXRpb24gZGF0YSB1c2luZyBvcHRpbWl6ZWQgRG91Z2xhcy1QZXVja2VyIGFsZ29yaXRobVxuXG5mdW5jdGlvbiBzaW1wbGlmeShwb2ludHMsIHRvbGVyYW5jZSkge1xuXG4gICAgdmFyIHNxVG9sZXJhbmNlID0gdG9sZXJhbmNlICogdG9sZXJhbmNlLFxuICAgICAgICBsZW4gPSBwb2ludHMubGVuZ3RoLFxuICAgICAgICBmaXJzdCA9IDAsXG4gICAgICAgIGxhc3QgPSBsZW4gLSAxLFxuICAgICAgICBzdGFjayA9IFtdLFxuICAgICAgICBpLCBtYXhTcURpc3QsIHNxRGlzdCwgaW5kZXg7XG5cbiAgICAvLyBhbHdheXMgcmV0YWluIHRoZSBlbmRwb2ludHMgKDEgaXMgdGhlIG1heCB2YWx1ZSlcbiAgICBwb2ludHNbZmlyc3RdWzJdID0gMTtcbiAgICBwb2ludHNbbGFzdF1bMl0gPSAxO1xuXG4gICAgLy8gYXZvaWQgcmVjdXJzaW9uIGJ5IHVzaW5nIGEgc3RhY2tcbiAgICB3aGlsZSAobGFzdCkge1xuXG4gICAgICAgIG1heFNxRGlzdCA9IDA7XG5cbiAgICAgICAgZm9yIChpID0gZmlyc3QgKyAxOyBpIDwgbGFzdDsgaSsrKSB7XG4gICAgICAgICAgICBzcURpc3QgPSBnZXRTcVNlZ0Rpc3QocG9pbnRzW2ldLCBwb2ludHNbZmlyc3RdLCBwb2ludHNbbGFzdF0pO1xuXG4gICAgICAgICAgICBpZiAoc3FEaXN0ID4gbWF4U3FEaXN0KSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIG1heFNxRGlzdCA9IHNxRGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXhTcURpc3QgPiBzcVRvbGVyYW5jZSkge1xuICAgICAgICAgICAgcG9pbnRzW2luZGV4XVsyXSA9IG1heFNxRGlzdDsgLy8gc2F2ZSB0aGUgcG9pbnQgaW1wb3J0YW5jZSBpbiBzcXVhcmVkIHBpeGVscyBhcyBhIHogY29vcmRpbmF0ZVxuICAgICAgICAgICAgc3RhY2sucHVzaChmaXJzdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIGZpcnN0ID0gaW5kZXg7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3QgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIGZpcnN0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNxdWFyZSBkaXN0YW5jZSBmcm9tIGEgcG9pbnQgdG8gYSBzZWdtZW50XG5mdW5jdGlvbiBnZXRTcVNlZ0Rpc3QocCwgYSwgYikge1xuXG4gICAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSxcbiAgICAgICAgYnggPSBiWzBdLCBieSA9IGJbMV0sXG4gICAgICAgIHB4ID0gcFswXSwgcHkgPSBwWzFdLFxuICAgICAgICBkeCA9IGJ4IC0geCxcbiAgICAgICAgZHkgPSBieSAtIHk7XG5cbiAgICBpZiAoZHggIT09IDAgfHwgZHkgIT09IDApIHtcblxuICAgICAgICB2YXIgdCA9ICgocHggLSB4KSAqIGR4ICsgKHB5IC0geSkgKiBkeSkgLyAoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICAgIGlmICh0ID4gMSkge1xuICAgICAgICAgICAgeCA9IGJ4O1xuICAgICAgICAgICAgeSA9IGJ5O1xuXG4gICAgICAgIH0gZWxzZSBpZiAodCA+IDApIHtcbiAgICAgICAgICAgIHggKz0gZHggKiB0O1xuICAgICAgICAgICAgeSArPSBkeSAqIHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkeCA9IHB4IC0geDtcbiAgICBkeSA9IHB5IC0geTtcblxuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVUaWxlO1xuXG5mdW5jdGlvbiBjcmVhdGVUaWxlKGZlYXR1cmVzLCB6MiwgdHgsIHR5LCB0b2xlcmFuY2UsIG5vU2ltcGxpZnkpIHtcbiAgICB2YXIgdGlsZSA9IHtcbiAgICAgICAgZmVhdHVyZXM6IFtdLFxuICAgICAgICBudW1Qb2ludHM6IDAsXG4gICAgICAgIG51bVNpbXBsaWZpZWQ6IDAsXG4gICAgICAgIG51bUZlYXR1cmVzOiAwLFxuICAgICAgICBzb3VyY2U6IG51bGwsXG4gICAgICAgIHg6IHR4LFxuICAgICAgICB5OiB0eSxcbiAgICAgICAgejI6IHoyLFxuICAgICAgICB0cmFuc2Zvcm1lZDogZmFsc2UsXG4gICAgICAgIG1pbjogWzIsIDFdLFxuICAgICAgICBtYXg6IFstMSwgMF1cbiAgICB9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGlsZS5udW1GZWF0dXJlcysrO1xuICAgICAgICBhZGRGZWF0dXJlKHRpbGUsIGZlYXR1cmVzW2ldLCB0b2xlcmFuY2UsIG5vU2ltcGxpZnkpO1xuXG4gICAgICAgIHZhciBtaW4gPSBmZWF0dXJlc1tpXS5taW4sXG4gICAgICAgICAgICBtYXggPSBmZWF0dXJlc1tpXS5tYXg7XG5cbiAgICAgICAgaWYgKG1pblswXSA8IHRpbGUubWluWzBdKSB0aWxlLm1pblswXSA9IG1pblswXTtcbiAgICAgICAgaWYgKG1pblsxXSA8IHRpbGUubWluWzFdKSB0aWxlLm1pblsxXSA9IG1pblsxXTtcbiAgICAgICAgaWYgKG1heFswXSA+IHRpbGUubWF4WzBdKSB0aWxlLm1heFswXSA9IG1heFswXTtcbiAgICAgICAgaWYgKG1heFsxXSA+IHRpbGUubWF4WzFdKSB0aWxlLm1heFsxXSA9IG1heFsxXTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbGU7XG59XG5cbmZ1bmN0aW9uIGFkZEZlYXR1cmUodGlsZSwgZmVhdHVyZSwgdG9sZXJhbmNlLCBub1NpbXBsaWZ5KSB7XG5cbiAgICB2YXIgZ2VvbSA9IGZlYXR1cmUuZ2VvbWV0cnksXG4gICAgICAgIHR5cGUgPSBmZWF0dXJlLnR5cGUsXG4gICAgICAgIHNpbXBsaWZpZWQgPSBbXSxcbiAgICAgICAgc3FUb2xlcmFuY2UgPSB0b2xlcmFuY2UgKiB0b2xlcmFuY2UsXG4gICAgICAgIGksIGosIHJpbmcsIHA7XG5cbiAgICBpZiAodHlwZSA9PT0gMSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZ2VvbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2ltcGxpZmllZC5wdXNoKGdlb21baV0pO1xuICAgICAgICAgICAgdGlsZS5udW1Qb2ludHMrKztcbiAgICAgICAgICAgIHRpbGUubnVtU2ltcGxpZmllZCsrO1xuICAgICAgICB9XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHNpbXBsaWZ5IGFuZCB0cmFuc2Zvcm0gcHJvamVjdGVkIGNvb3JkaW5hdGVzIGZvciB0aWxlIGdlb21ldHJ5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBnZW9tLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByaW5nID0gZ2VvbVtpXTtcblxuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCB0aW55IHBvbHlsaW5lcyAmIHBvbHlnb25zXG4gICAgICAgICAgICBpZiAoIW5vU2ltcGxpZnkgJiYgKCh0eXBlID09PSAyICYmIHJpbmcuZGlzdCA8IHRvbGVyYW5jZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGUgPT09IDMgJiYgcmluZy5hcmVhIDwgc3FUb2xlcmFuY2UpKSkge1xuICAgICAgICAgICAgICAgIHRpbGUubnVtUG9pbnRzICs9IHJpbmcubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc2ltcGxpZmllZFJpbmcgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHJpbmcubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwID0gcmluZ1tqXTtcbiAgICAgICAgICAgICAgICAvLyBrZWVwIHBvaW50cyB3aXRoIGltcG9ydGFuY2UgPiB0b2xlcmFuY2VcbiAgICAgICAgICAgICAgICBpZiAobm9TaW1wbGlmeSB8fCBwWzJdID4gc3FUb2xlcmFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxpZmllZFJpbmcucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5udW1TaW1wbGlmaWVkKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpbGUubnVtUG9pbnRzKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpbXBsaWZpZWQucHVzaChzaW1wbGlmaWVkUmluZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2ltcGxpZmllZC5sZW5ndGgpIHtcbiAgICAgICAgdGlsZS5mZWF0dXJlcy5wdXNoKHtcbiAgICAgICAgICAgIGdlb21ldHJ5OiBzaW1wbGlmaWVkLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIHRhZ3M6IGZlYXR1cmUudGFncyB8fCBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsaXAgPSByZXF1aXJlKCcuL2NsaXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3cmFwO1xuXG5mdW5jdGlvbiB3cmFwKGZlYXR1cmVzLCBidWZmZXIsIGludGVyc2VjdFgpIHtcbiAgICB2YXIgbWVyZ2VkID0gZmVhdHVyZXMsXG4gICAgICAgIGxlZnQgID0gY2xpcChmZWF0dXJlcywgMSwgLTEgLSBidWZmZXIsIGJ1ZmZlciwgICAgIDAsIGludGVyc2VjdFgsIC0xLCAyKSwgLy8gbGVmdCB3b3JsZCBjb3B5XG4gICAgICAgIHJpZ2h0ID0gY2xpcChmZWF0dXJlcywgMSwgIDEgLSBidWZmZXIsIDIgKyBidWZmZXIsIDAsIGludGVyc2VjdFgsIC0xLCAyKTsgLy8gcmlnaHQgd29ybGQgY29weVxuXG4gICAgaWYgKGxlZnQgfHwgcmlnaHQpIHtcbiAgICAgICAgbWVyZ2VkID0gY2xpcChmZWF0dXJlcywgMSwgLWJ1ZmZlciwgMSArIGJ1ZmZlciwgMCwgaW50ZXJzZWN0WCwgLTEsIDIpOyAvLyBjZW50ZXIgd29ybGQgY29weVxuXG4gICAgICAgIGlmIChsZWZ0KSBtZXJnZWQgPSBzaGlmdEZlYXR1cmVDb29yZHMobGVmdCwgMSkuY29uY2F0KG1lcmdlZCk7IC8vIG1lcmdlIGxlZnQgaW50byBjZW50ZXJcbiAgICAgICAgaWYgKHJpZ2h0KSBtZXJnZWQgPSBtZXJnZWQuY29uY2F0KHNoaWZ0RmVhdHVyZUNvb3JkcyhyaWdodCwgLTEpKTsgLy8gbWVyZ2UgcmlnaHQgaW50byBjZW50ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkO1xufVxuXG5mdW5jdGlvbiBzaGlmdEZlYXR1cmVDb29yZHMoZmVhdHVyZXMsIG9mZnNldCkge1xuICAgIHZhciBuZXdGZWF0dXJlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZmVhdHVyZSA9IGZlYXR1cmVzW2ldLFxuICAgICAgICAgICAgdHlwZSA9IGZlYXR1cmUudHlwZTtcblxuICAgICAgICB2YXIgbmV3R2VvbWV0cnk7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIG5ld0dlb21ldHJ5ID0gc2hpZnRDb29yZHMoZmVhdHVyZS5nZW9tZXRyeSwgb2Zmc2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0dlb21ldHJ5ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZlYXR1cmUuZ2VvbWV0cnkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBuZXdHZW9tZXRyeS5wdXNoKHNoaWZ0Q29vcmRzKGZlYXR1cmUuZ2VvbWV0cnlbal0sIG9mZnNldCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmV3RmVhdHVyZXMucHVzaCh7XG4gICAgICAgICAgICBnZW9tZXRyeTogbmV3R2VvbWV0cnksXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgdGFnczogZmVhdHVyZS50YWdzLFxuICAgICAgICAgICAgbWluOiBbZmVhdHVyZS5taW5bMF0gKyBvZmZzZXQsIGZlYXR1cmUubWluWzFdXSxcbiAgICAgICAgICAgIG1heDogW2ZlYXR1cmUubWF4WzBdICsgb2Zmc2V0LCBmZWF0dXJlLm1heFsxXV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0ZlYXR1cmVzO1xufVxuXG5mdW5jdGlvbiBzaGlmdENvb3Jkcyhwb2ludHMsIG9mZnNldCkge1xuICAgIHZhciBuZXdQb2ludHMgPSBbXTtcbiAgICBuZXdQb2ludHMuYXJlYSA9IHBvaW50cy5hcmVhO1xuICAgIG5ld1BvaW50cy5kaXN0ID0gcG9pbnRzLmRpc3Q7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdQb2ludHMucHVzaChbcG9pbnRzW2ldWzBdICsgb2Zmc2V0LCBwb2ludHNbaV1bMV0sIHBvaW50c1tpXVsyXV0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3UG9pbnRzO1xufVxuIl19