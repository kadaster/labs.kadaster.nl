import React from "react";
import { State, SingleObject } from "../reducer";
export interface Props {
    results: State["searchResults"];
    onClickItem: (item: SingleObject) => void;
    onMouseEnterItem: (item: SingleObject) => void;
    onMouseLeaveItem: (item: SingleObject) => void;
}
declare const Results: React.FC<Props>;
export default Results;
