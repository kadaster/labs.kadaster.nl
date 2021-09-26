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
    type: "literal";
    value: string;
    "xml:lang"?: string;
    datatype?: string;
} | {
    type: "bnode";
    value: string;
};
export declare function queryResourcesDescriptions(iris: string[]): Promise<{
    url: string;
    name: string;
    types: string[];
    geojson: any;
    color: string;
}[]>;
export declare function queryTriply(query: string): Promise<SparqlResults>;
export interface VerboseDescription {
    label: string;
    types: string[];
    props: {
        key: string;
        value: string;
    }[];
}
export declare function getVerboseDescription(forObject: SingleObject): Promise<VerboseDescription>;
