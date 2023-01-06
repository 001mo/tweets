import { useContext } from "react";
import PopperContext from "./Context";

export default function Reference({ children }) {
    const { setMouseOverReference } = useContext(PopperContext);

    return (
        <button onMouseEnter={() => setMouseOverReference(true)} onMouseLeave={() => setMouseOverReference(false)}>
            { children }
        </button>
    );
}