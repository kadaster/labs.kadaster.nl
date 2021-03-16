import { SingleObject } from "../reducer";
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
export declare function queryResourcesDescriptions(lat: string, lng: string, iris: string[]): Promise<SingleObject[]>;
export declare function runQuery(lat: string, long: string): Promise<SparqlResults>;
