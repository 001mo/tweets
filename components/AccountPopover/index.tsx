import React from "react";
import Image from "next/image";
import { Popover, PopoverProps } from "@mui/material";
import FollowButton from "components/buttons/FollowButton";
import profilePic from "public/imgs/profile-pic.png";

type AccountInfoType = {
    name: string,
    username: string,
}

type AccountPopoverPropsType = {
    accountInfo?: AccountInfoType,
    popoverProps: PopoverProps,
}

export default function AccountPopover(props: AccountPopoverPropsType){
    const popoverProps = {
        ...props.popoverProps,
        sx: { // (d) remove bg and color after dark mode is established.
            '& .MuiPopover-paper': {
                bgcolor: 'transparent',
                color: '#fff',
                boxShadow: '0 0 15px rgba(255,255,255,0.2)'
            }
        }
    }

    return (
        <Popover {...popoverProps}>
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
                            { props.accountInfo.name }
                        </div>
                        <div className="text-zinc-500 text-sm">
                            { props.accountInfo.username }
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
        </Popover>
    )
}
