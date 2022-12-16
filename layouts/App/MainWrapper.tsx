export default function MainWrapper({ children }) {
    return (
        <div className="relative z-0 flex flex-row items-stretch w-full h-screen">
            {children}
        </div>
    )
}