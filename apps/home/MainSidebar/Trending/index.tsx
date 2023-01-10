import Item from "./Item";

export default function Trending() {
    return (
        <div className="wrapper mb-4 rounded-2xl bg-gray-50 dark:bg-zinc-900">
            <div className='px-4 py-2'>
                <h2>What's happening</h2>
            </div>

            {Array(5).fill(0).map(() => 
                <Item trendData={{}} />
            )}

            <div className='wrapper p-4 transition-all duration-200 hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.03)] rounded-b-2xl'>
                <button className='wrapper text-left'>
                    <div>
                        <span className='text-brand'>Show more</span>
                    </div>
                </button>
            </div>
        </div>
    );
}