import useWindowSize from "hooks/useWindowSize";

export default function Header({ children, height }) {
    const windowSize = useWindowSize();

    return (
        <header>
            {windowSize.width >= 500 ?
                children
            : <div style={{height}}></div> }
        </header>
    )
}