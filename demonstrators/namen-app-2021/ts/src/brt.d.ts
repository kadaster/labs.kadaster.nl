export declare const sparqlApi = "https://api.labs.kadaster.nl/datasets/kadaster/brt-2/services/brt/sparql";
export declare const elasticSearchApi = "https://api.labs.kadaster.nl/datasets/kadaster/brt-2/services/search/search";
export declare function getResourceDescriptionsQuery(resources: string[]): string;
export declare function getResourcesByCoordinateQuery(top: number, left: number, bottom: number, right: number): string;
