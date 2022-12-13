import { useState, useEffect } from "react";
import useWindowSize from "hooks/useWindowSize";

export default function Header({ children, height }) {
    const [innerBannerWidth, setInnerBannerWidth] = useState(0);
    const windowSize = useWindowSize();

    useEffect(() => {
        const scWidth = windowSize.width;
        setInnerBannerWidth(() =>
            scWidth < 617 || (scWidth >= 1005 && scWidth < 1282) ? 68
            : scWidth >= 617 && scWidth < 1005 ? 88
            : scWidth >= 1282 ? 275 : 0
        )
    }, [windowSize])

    return (
        <header role="banner" className="grow flex flex-col items-end relative z-30">
            {windowSize.width >= 500 ?
            <div style={{
                backgroundColor: '#000',
                width: innerBannerWidth + 'px',
            }}>
                <div className="fixed top-0 h-full z-0">
                    <div
                    className="h-full flex content-between"
                    style={{
                        backgroundColor: '#f00',    
                        width: innerBannerWidth + 'px',
                    }}>
                        <div className="flex flex-col">
                            {children}
                        </div>

                        {/* account dropdown */}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            : <div style={{height}}></div> }
        </header>
    )
}