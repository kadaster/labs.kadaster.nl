export declare const sparqlApi = "https://api.labs.kadaster.nl/datasets/brt/top10nl/services/top10nl/sparql";
export declare const elasticSearchApi = "https://api.labs.kadaster.nl/datasets/brt/top10nl/services/search/elasticsearch";
export declare function getResourceDescriptionsQuery(resources: string[]): string;
export declare function getResourcesByCoordinateQuery(top: number, left: number, bottom: number, right: number): string;