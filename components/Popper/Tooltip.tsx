import { useContext, useState, useEffect } from "react";
import PopperContext from "./Context";


export default function Tooltip({ children }) {
    const { mouseOverReference } = useContext(PopperContext);
    const [mouseOverTooltip, setMouseOverTooltip] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        if(!mouseOverReference){
            handleMouseLeaveReference();
        }
        else {
            setShowTooltip(true);
        }
    }, [mouseOverReference]);

    const handleMouseLeaveReference = () => {

        setTimeout(() => {
            // if mouse didn't move off 'Reference' over onto tooltip then hide tooltip
            if(!mouseOverTooltip) {
                fadeTooltip();
            }
        }, 500);
    }

    const fadeTooltip = () => { // (d) finish this function
        setShowTooltip(true);
        // (d) do css functionality here to fade tooltip smoothly.
    }

    return mouseOverTooltip ? // (d) fade tooltip instead
        <div onMouseEnter={() => setMouseOverTooltip(true)} onMouseLeave={() => setMouseOverTooltip(false)}>
            { children }
        </div>
    : <></> ;
}