import { useState, useEffect } from "react";
import useWindowSize from "hooks/useWindowSize";

export default function App({ children }) {
    const [wrapperWidth, setWrapperWidth] = useState(0);
    const windowSize = useWindowSize();

    useEffect(() => {
        const scWidth = windowSize.width;
        setWrapperWidth(() =>
            scWidth >= 600 ? 600
            : scWidth >= 1005 ? 920
            : 0 
        )
    }, [windowSize]);

    return (
        <div
        className="w-full flex-auto flex flex-col items-stretch border-x broder-x-gray-700"
        style={windowSize.width >= 600 ? {maxWidth: 600 + 'px'} : {}}>

        </div>
    )
}