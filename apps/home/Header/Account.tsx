import Image from "next/image";
import React, { useState } from 'react';
import { Menu, MenuItem } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import profilePic from 'public/imgs/profile-pic.png';

export default function Account() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
    const open = Boolean(anchorEl);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <button
                onClick={handleClick}
                className="flex flex-row items-center p-[12px] rounded-full hover:bg-[rgba(231,233,234,0.1)]">
                <div className="flex items-center">
                    <Image
                        alt="profile picture"
                        src={profilePic}
                        height={48}
                        width={48}
                        style={{ borderRadius: '50%' }}
                    />
                </div>
                {/*  className="flex items-center" */}
                <div className="grow ml-2 flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-start">
                        <div className="font-semibold">Joe Khalaf</div>
                        <div className="text-zinc-500">@realJoeKhalaf</div>
                    </div>
                    <div className="flex justify-end">
                        <MoreHoriz />
                    </div>
                </div>
            </button>

            <Menu
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    '& .MuiPopover-paper': {
                        width: 300,
                        bgcolor: '#000',
                        color: '#fff',
                        borderRadius: '12px',
                        boxShadow: '0 0 15px rgba(255,255,255,0.2)'
                    },
                    '& .MuiMenuItem-root:hover': {
                        bgcolor: 'rgba(231,233,234,0.1)'
                    }
                }}>
                <MenuItem>Add an existing account</MenuItem>
                <MenuItem>Log out @realJoeKhalaf</MenuItem>
            </Menu>
        </>
    )
}