export default function App({ children }) {
    return (
        <main className="grow min-[500px]:max-[705px]:w-full min-[705px]:grow-2 shrink flex flex-col items-stretch min-[705px]:items-start">
            <div className="wrapper min-[705px]:w-[600px] min-[1005px]:w-[920px] min-[1095px]:w-[990px] h-[10000px]"> {/* (d) remove h-[] classname */}
                <div className="grow wrapper flex-row justify-between min-height-full">
                    {children}
                </div>
            </div>
        </main>
    )
}