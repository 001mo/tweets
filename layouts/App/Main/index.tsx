import { useState, useEffect } from "react";
import useWindowSize from "hooks/useWindowSize";

export default function App({ children }) {
    const [wrapperWidth, setWrapperWidth] = useState(0);
    const windowSize = useWindowSize();

    useEffect(() => {
        const scWidth = windowSize.width;
        setWrapperWidth(() =>
            scWidth >= 705 ? 600
            : scWidth >= 1005 ? 920
            : 0 
        )
    }, [windowSize]);

    return (
        <main className="flex-1 lg:grow-2 xl:grow xl:shrink flex flex-col items-stretch lg:items-start">
            <div
            className="shrink flex-auto flex flex-col items-stretch"
            style={windowSize.width >= 705 ? {width: wrapperWidth + 'px'} : {}}>
                <div className="flex-auto flex flex-row items-stretch content-between w-full min-height-full">
                    {children}
                </div>
            </div>
        </main>
    )
}