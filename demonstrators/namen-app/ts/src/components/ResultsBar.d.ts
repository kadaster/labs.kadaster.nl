import React from "react";
export interface Props {
    loading: boolean;
    numberSearchResults: number;
    onBack: () => void;
}
declare const NavBar: React.FC<Props>;
export default NavBar;
