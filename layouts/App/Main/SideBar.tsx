import useWindowSize from "hooks/useWindowSize";

export default function SideBar({ children }) {
    const windowSize = useWindowSize();

    return windowSize.width < 1005 ? <></> : (
        <div className="bg-red-500 mr-[10px] w-[290px] min-[1095px]:w-[350px]">
            {children}
        </div>
    );
}