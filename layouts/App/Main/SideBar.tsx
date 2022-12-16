import useWindowSize from "hooks/useWindowSize";

export default function SideBar({ children }) {
    const windowSize = useWindowSize();

    return windowSize.width < 1005 ? <></> : (
        <div
        className="ml-[10px] flex-auto"
        style={{width: windowSize.width >= 1095 ? 350 + 'px' : 290 + 'px'}}>
            {children}
        </div>
    );
}