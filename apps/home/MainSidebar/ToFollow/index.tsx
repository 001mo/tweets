import SuggestedUser from "./SuggestedUser";

export default function ToFollow() {
    return (
        <div className="wrapper rounded-2xl bg-gray-50 dark:bg-zinc-900">
            <div className='px-4 py-2'>
                <h2>Who To Follow</h2>
            </div>

            {Array(2).fill('').map(() => 
                <SuggestedUser userInfo={{}} />
            )}

            <div className='wrapper px-4 py-3 transition-all duration-200 hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.03)] rounded-b-2xl'>
                <button className='wrapper text-left'>
                    <div>
                        <span className='text-brand'>Show more</span>
                    </div>
                </button>
            </div>
        </div>
    )
}