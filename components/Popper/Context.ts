import { createContext } from "react";

type PopperContextType = {
    mouseOverReference: boolean,
    setMouseOverReference: (isMouseOverReference: boolean) => void
};

const initValue = {
    mouseOverReference: false,
    setMouseOverReference: () => undefined
}

const PopperContext = createContext<PopperContextType>(initValue);
PopperContext.displayName = 'PopperContext';

export default PopperContext;