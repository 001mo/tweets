import Image from "next/image";
import profilePic from "public/imgs/profile-pic.png";

export default function ToFollow() {
    return (
        <div className="wrapper rounded-2xl bg-gray-50 dark:bg-zinc-900">
            <div className='px-4 py-2'>
                <h2>Who To Follow</h2>
            </div>

            <div className='wrapper flex-row px-4 py-3 transition-all duration-200 hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.03)]'>
                <div className="wrapper flex-row items-center content-center">
                    <div className='mr-[12px]'>
                        <Image
                        alt="profile picture"
                        src={profilePic}
                        layout="fixed"
                        height={48}
                        width={48}
                        style={{borderRadius: '50%'}}
                        />
                    </div>
                </div>

                <div className="wrapper flex-row">
                    <div>
                        <div>
                            Scott Adam
                        </div>
                        <div className="text-zinc-500 text-sm">
                            @ScottAdams
                        </div>
                    </div>
                    <div className='ml-[12px] wrapper flex-row items-center content-center'>
                        <button className='bg-zinc-900 dark:bg-slate-100 hover:bg-gray-800 dark:hover:bg-slate-50 text-white dark:text-zinc-900 font-bold py-1 px-4 rounded-3xl transition-all duration-200'>
                            Follow
                        </button>
                    </div>
                </div>
            </div>

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