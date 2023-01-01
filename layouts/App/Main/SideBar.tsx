import useWindowSize from "hooks/useWindowSize";

export default function SideBar({ children }) {
    const windowSize = useWindowSize();

    return windowSize.width < 1005 ? <></> : (
        <div className="w-[290px] min-[1095px]:w-[350px]">
            <div className="wrapper mr-[10px]">
                {children}
            </div>

            <div>
                2022 Twitter. Inc. 
            </div>
        </div>
    );
}