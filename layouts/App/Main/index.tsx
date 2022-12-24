export default function App({ children }) {
    return (
        <main className="grow min-[500px]:max-[687px]:w-full min-[688px]:grow-2 shrink flex flex-col items-stretch min-[688px]:items-start bg-slate-900">
            <div className="min-[688px]:w-[600px] min-[988px]:w-[920px] min-[1078px]:w-[990px]">
                <div className="flex-auto flex flex-row items-stretch content-between w-full min-height-full">
                    {children}
                </div>
            </div>
        </main>
    )
}