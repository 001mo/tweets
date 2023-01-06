import React from "react";
import Image from "next/image";
import FollowButton from "components/buttons/FollowButton";
import profilePic from "public/imgs/profile-pic.png";

type PropsType = {
    accountInfo: any,
    style: any,
    others: any
}

const AccountToolTip = React.forwardRef((props: PropsType, ref) => {
    const { accountInfo, style, others } = props;

    return (
        <div {...others} style={{
            zIndex: 1000,
            ...style
        }}>
            <div className="wrapper w-[350px] min-h-[130px] px-4 py-2 rounded-2xl dark:bg-black shadow-[0_0_15px_rgba(255,255,255,0.2)]"> {/* (d) code: x-1 - replace px- classname with p- */}
                <div className="py-1"> {/* (d) code: x-1 - remove padding y */}
                    <div className="flex flex-row justify-between">
                        <div className='mr-[12px]'>
                            <Image
                                alt="profile picture"
                                src={profilePic}
                                loading="lazy"
                                height={48}
                                width={48}
                                style={{ borderRadius: '50%' }}
                            />
                        </div>
                        <div>
                            <FollowButton />
                        </div>
                    </div>

                    <div className="wrapper pt-1">
                        <div className="font-bold text-lg">
                            Scott Adam
                        </div>
                        <div className="text-zinc-500 text-sm">
                            @ScottAdams
                        </div>
                    </div>
                </div>

                <div className="py-1"> {/* (d) code: x-1 - remove padding y */}
                    Simulation Wrangler
                    Dilbert maker
                    Author
                    Pandemic predictions:
                </div>

                <div className="py-1"> {/* (d) code: x-1 - remove padding y */}
                    <div className="wrapper flex-row flex-1">
                        <a className="mr-2">
                            <span className="font-bold">243 </span>
                            <span className="text-zinc-500 text-sm">Following</span>
                        </a>
                        <a>
                            <span className="font-bold">12.6M </span>
                            <span className="text-zinc-500 text-sm">Followers</span>
                        </a>
                    </div>
                </div>

                <div className="py-1"> 
                    {/*
                        (d) code: x-1 - remove padding y
                        (d) build profile pictures.
                    */}
                    <a className="text-zinc-500 text-sm">
                        <div>
                            Followed by Joe Rogan, Joco Wilinks, David Goggins, and 7 others you follow
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
})

export default AccountToolTip