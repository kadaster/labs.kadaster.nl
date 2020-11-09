export declare function search(text: string): Promise<{
    url: string;
    name: string;
    types: string[];
    geojson: any;
    color: string;
}[]>;
