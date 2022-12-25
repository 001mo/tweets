import useWindowSize from "hooks/useWindowSize";

export default function SideBar({ children }) {
    const windowSize = useWindowSize();

    return windowSize.width < 988 ? <></> : (
        <div className="bg-red-500 mr-[10px] w-[290px] w-[1078px]:w-[350px] w-[1265px]:w-[275px]">
            {children}
        </div>
    );
}