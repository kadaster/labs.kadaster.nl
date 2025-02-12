import { SingleObject } from "../reducer";
export declare function objectToGeojson(val: SingleObject): GeoJSON.Feature<GeoJSON.Geometry, SingleObject>;
export declare function getAllObjectsAsFeature(values: Array<SingleObject>): GeoJSON.Feature[];
