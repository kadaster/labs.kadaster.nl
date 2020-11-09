import { CoordinateQuery } from "../reducer";
export declare function getFromCoordinates(ctx: CoordinateQuery): Promise<{
    url: string;
    name: string;
    types: string[];
    geojson: any;
    color: string;
}[]>;
