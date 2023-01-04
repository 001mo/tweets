export default function App({ children }) {
    return (
        <div className="wrapper w-full min-[600px]:max-w-[600px] z-10 border-x border-x-gray-700">
            { children }
        </div>
    )
}