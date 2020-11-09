import React from "react";
export interface State {
    clickedLayer: {
        x: number;
        y: number;
        values: Array<SingleObject>;
    };
    coordinateQuery: CoordinateQuery;
    isFetching: boolean;
    mapClustered: boolean;
    searchQuery: string;
    searchResults: Array<SingleObject>;
    selectedObject: SingleObject;
    zoomLevel: number;
}
export declare const initialState: State;
export declare type Action = {
    type: "clickLayer";
    value: {
        x: number;
        y: number;
        values: Array<SingleObject>;
    };
} | {
    type: "closeClickedLayer";
} | {
    type: "coordinate_search_error";
} | {
    type: "coordinate_search_start";
    value: CoordinateQuery;
} | {
    type: "coordinate_search_success";
    results: State["searchResults"];
} | {
    type: "reset";
} | {
    type: "resetSelectedObject";
} | {
    type: "search_error";
    value: string;
} | {
    type: "search_start";
    value: string;
} | {
    type: "search_success";
    value: string;
    results: State["searchResults"];
} | {
    type: "selectObject";
    value: SingleObject;
} | {
    type: "setMapClustered";
    value: boolean;
} | {
    type: "typeSearch";
    value: string;
} | {
    type: "zoomChange";
    value: number;
};
export interface SingleObject {
    registratie: string;
    shapeTooltip: string;
    types: string[];
    shape: any;
    shapeColor: string;
}
export interface CoordinateQuery {
    lat: string;
    lng: string;
}
export declare const reducer: React.Reducer<State, Action>;
