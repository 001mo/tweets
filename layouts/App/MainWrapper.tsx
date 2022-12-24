export default function MainWrapper({ children }) {
    return (
        <div className="wrapper min-[500px]:flex-row h-full">
            {children}
        </div>
    )
}