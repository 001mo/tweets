import useWindowSize from "hooks/useWindowSize";


export default function HeaderBar({ children }) {
    const windowSize = useWindowSize();

    return windowSize.width < 500 ? (
        <div className="fixed top-0 left-0 right-0">
            <div className="fixed top-0 left-0 right-0">
                {children}
            </div>
        </div>
    ) : <></>;
}