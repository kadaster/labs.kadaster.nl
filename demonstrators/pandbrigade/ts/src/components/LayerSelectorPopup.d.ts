import React from 'react';
import { SingleObject } from '../reducer';
interface Props {
    handleClose: () => void;
    handleClick: (clicked: SingleObject) => void;
    options: {
        x: number;
        y: number;
        values: Array<SingleObject>;
    };
}
declare const Popup: React.FC<Props>;
export default Popup;
