import "leaflet.markercluster";
import * as GeoJson from "geojson";
import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";
import * as Reducer from "./reducer";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
export declare type FeatureProperties = Reducer.SingleObject;
export declare type GeojsonFeature = GeoJson.Feature<GeoJson.Geometry, FeatureProperties>;
export declare function init(opts: {
    onContextSearch: (context: Reducer.CoordinateQuery) => void;
    onZoomChange: (zoomLevel: number) => void;
    onClick: (el: Reducer.SingleObject) => void;
    onLayersClick: (info: Reducer.State["clickedLayer"]) => void;
}): void;
export declare function closePopup(): void;
export declare function centerMap(): void;
export declare function updateMap(opts: {
    selectedObject?: Reducer.SingleObject;
    searchResults?: Reducer.State["searchResults"];
    updateZoom: boolean;
}): void;
export declare function toggleClustering(toggle: boolean): void;
export declare function findMarkerByUrl(registratie: string): any;
