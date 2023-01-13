import useWindowSize from "hooks/useWindowSize";

export default function Header({ children }) {
    const windowSize = useWindowSize();

    return (
        <header role="banner" className="min-[500px]:grow min-[500px]:shrink-0 flex flex-col items-end"> {/* (d) remove bg- class */}
            {windowSize.width < 500 ?
                // works as a placeholder for absolute element "header" that's render under 500px 
                <div style={{height: '53px'}}></div>
            :
                <div className="wrapper min-[500px]:w-[68px] min-[617px]:w-[88px] min-[1005px]:max-[1024px]:w-[68px] min-[1005px]:w-[88px] min-[1025px]:w-[88px] min-[1282px]:w-[275px]"> {/* (d) remove h-full and bg- class */}
                    <div className="fixed top-0 h-full z-0">
                        <div className="wrapper h-full px-[12px] min-[500px]:w-[68px] min-[617px]:w-[88px] min-[1005px]:max-[1024px]:w-[68px] min-[1005px]:w-[88px] min-[1025px]:w-[88px] min-[1282px]:w-[275px]">
                            { children }
                        </div>
                    </div>
                </div>
            }
        </header>
    )
}