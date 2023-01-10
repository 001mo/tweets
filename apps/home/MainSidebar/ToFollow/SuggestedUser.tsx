import { useState } from "react";
import Image from "next/image";
import AccountPopover from "components/AccountPopover";
import FollowButton from "components/buttons/FollowButton";
import profilePic from "public/imgs/profile-pic.png";


export default function SuggestedUser({ userInfo }) { // (d) fix handleMouseOver
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        const el = e.currentTarget;
        setTimeout(() => {
            setAnchorEl(el);
        }, 300)
    }

    const handlePopoverClose = () => {
        setTimeout(() => {
            setAnchorEl(null);
        }, 300)
    }

    return (
        <div className="wrapper">
            <button className='wrapper flex-row px-4 py-3 transition-all duration-200 hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.03)]'>
                <div className="wrapper flex-row items-center content-center">
                    <div className='mr-[12px]'>
                        <Image
                            alt="profile picture"
                            src={profilePic}
                            height={48}
                            width={48}
                            style={{ borderRadius: '50%' }}
                        />
                    </div>
                </div>

                <div className="grow">
                    <div className="wrapper flex-row justify-between">
                        <div className="wrapper">
                            <a
                                onMouseOver={handleMouseEnter}
                                // onMouseOut={handlePopoverClose}
                                className="word-wrap font-semibold text-lg"
                            >
                                Scott Adam
                            </a>
                            <a
                                // onMouseOver={handleMouseEnter}
                                // onMouseOut={handlePopoverClose}
                                className="text-zinc-500"
                            >
                                @ScottAdams
                            </a>
                        </div>
                        <div className='ml-[12px] wrapper flex-row items-center content-center'>
                            <FollowButton />
                        </div>
                    </div>
                </div>
            </button>

            <AccountPopover
                accountInfo={{
                    name: 'Scott Adam',
                    username: '@ScottAdams'
                }}
                popoverProps={{
                    open,
                    anchorEl,
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                    },
                    onClose: handlePopoverClose,
                    disableRestoreFocus: true,
                }}
            />
        </div>
    )
}