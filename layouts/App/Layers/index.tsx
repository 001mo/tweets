export default function Layers({ children }) {
    return (
        <div id="layers" className="absolute top-0 right-0 left-0 z-10">
            { children }
        </div>
    )
}