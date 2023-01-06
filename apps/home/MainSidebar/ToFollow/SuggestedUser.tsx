import { useState } from "react";
import Image from "next/image";
import { usePopper } from 'react-popper';
import AccountToolTip from "components/AccountToolTip";
import FollowButton from "components/buttons/FollowButton";
import profilePic from "public/imgs/profile-pic.png";


export default function SuggestedUser({ userInfo }) {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement);
    const [showToolTip, setShowToolTip] = useState(false)

    return (
        <div className="wrapper" onMouseEnter={() => setShowToolTip(true)} onMouseLeave={() => setShowToolTip(false)}>
            <button
            ref={setReferenceElement}
            className='wrapper flex-row px-4 py-3 transition-all duration-200 hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.03)]'>
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
                        <div>
                            <div>
                                Scott Adam
                            </div>
                            <div className="text-zinc-500 text-sm">
                                @ScottAdams
                            </div>
                        </div>
                        <div className='ml-[12px] wrapper flex-row items-center content-center'>
                            <FollowButton />
                        </div>
                    </div>
                </div>
            </button>

            {showToolTip &&
                <AccountToolTip
                ref={setPopperElement}
                style={styles.popper}
                others={{...attributes.popper}}
                accountInfo={{}} />
            }
        </div>
    )
}