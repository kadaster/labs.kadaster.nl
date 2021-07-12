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
    type: "typed-literal";
    value: string;
} | {
    type: "uri";
    value: string;
} | {
    type: "typed-literal";
    value: string;
};
export declare function searchResourcesDescriptions(api: string, iris: string[]): Promise<SingleObject[]>;
export declare function searchQuery(api: string): Promise<SparqlResults>;
