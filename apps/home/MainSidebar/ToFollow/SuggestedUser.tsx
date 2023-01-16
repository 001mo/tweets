import React, { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { WrapperButton, Wrapper } from "components";
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
            <WrapperButton>
                <Wrapper sx={{ flexDirection: "row", alignItems: "center" }}>
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
                            justifyContent: 'space-between'
                        }}>
                            <Wrapper>
                                <Box
                                    onMouseOver={handleMouseEnter}
                                    // onMouseOut={handlePopoverClose}
                                    sx={{
                                        wordWrap: 'break-word',
                                        fontWeight: 700,
                                        fontSize: 15,
                                        lineHeight: 1.33,
                                        color: 'text.primary',
                                    }}>
                                    Scott Adam
                                </Box>
                                <Box
                                    // onMouseOver={handleMouseEnter}
                                    // onMouseOut={handlePopoverClose}
                                    sx={{
                                        lineHeight: 1.33,
                                        color: "text.secondary",
                                    }}>
                                    @ScottAdams
                                </Box>
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
            </WrapperButton>

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