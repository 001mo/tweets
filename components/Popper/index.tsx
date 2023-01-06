import { useState } from "react";
import PopperContext from "./Context";

export default function Popper({ children }) {
    const [mouseOverReference, setMouseOverReference] = useState(false);

    return (
        <PopperContext.Provider value={{ mouseOverReference, setMouseOverReference }}>
            { children }
        </PopperContext.Provider>
    )
}