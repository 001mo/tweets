import React, { useState } from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { Wrapper } from "components";
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
        <Wrapper>
            {/* className='transition-all duration-200 hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.03)] */}
            <Button variant="text" sx={{ borderRadius: 0 }}>
                <Wrapper sx={{
                    flexDirection: "row",
                    px: 8,
                    py: 6,
                }}>
                    <Wrapper sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Box sx={{ mr: 6 }}>
                            <Image
                                alt="profile picture"
                                src={profilePic}
                                height={48}
                                width={48}
                                style={{ borderRadius: '50%' }}
                            />
                        </Box>
                    </Wrapper>

                    <Wrapper sx={{ flexGrow: 1 }}>
                        <Wrapper sx={{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <Wrapper>
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
                            </Wrapper>
                            <Wrapper sx={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                ml: 6,
                            }}>
                                <FollowButton />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Button>

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
        </Wrapper>
    )
}