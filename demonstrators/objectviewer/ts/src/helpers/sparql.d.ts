import { SingleObject } from "../reducer";
import { RightClickObject } from "../reducer";
export interface SparqlResults {
    head: Head;
    results: {
        bindings: Binding[];
    };
}
export interface Head {
    vars: string[];
}
export interface Binding {
    [varname: string]: BindingValue;
}
export declare type BindingValue = {
    type: "uri";
    value: string;
} | {
    type: "typed-literal";
    value: string;
} | {
    type: "literal";
    value: string;
} | {
    type: number;
    value: string;
} | {
    type: "typed-literal";
    value: string;
} | {
    type: "literal";
    value: string;
} | {
    type: "url";
    value: string;
} | {
    type: "literal";
    value: string;
} | {
    type: "literal";
    value: string;
} | {
    type: "url";
    value: string;
} | {
    type: "literal";
    value: string;
};
export interface SparqlResultsRightClick {
    head: Head;
    results: {
        bindings: RightClickBinding[];
    };
}
export interface RightClickBinding {
    [varname: string]: RightClickBindingValue;
}
export declare type RightClickBindingValue = {
    type: "typed-literal";
    value: string;
} | {
    type: "literal";
    value: string;
} | {
    type: "uri";
    value: string;
} | {
    type: "uri";
    value: string;
};
export declare function queryResourcesDescriptions(lat: string, lng: string, iris: string[]): Promise<RightClickObject[]>;
export declare function searchResourcesDescriptions(postcode: string, housenumber: string, iris: string[]): Promise<SingleObject[]>;
export declare function runQuery(lat: string, long: string): Promise<SparqlResultsRightClick>;
export declare function searchQuery(postcode: string, housenumber: string): Promise<SparqlResults>;
