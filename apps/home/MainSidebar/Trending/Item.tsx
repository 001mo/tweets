import React, { useState } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { SentimentDissatisfied } from '@mui/icons-material';
import { MoreVert } from "@mui/icons-material";


export default function Item({ trendData }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
    const open = Boolean(anchorEl);

    const handleOptionsClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    }

    const handleOptionsClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className='wrapper px-4 py-3 transition-all duration-200 hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.03)]'>
            <button className='wrapper text-left'>
                <div>
                    <span className='text-secondary text-sm'>Trending</span>
                </div>
                <div>
                    <span className='font-medium'>Andrew Tate</span>
                </div>
                <div>
                    <span className='text-secondary text-sm'>39.8k Tweets</span>
                </div>

                {/* ===== options button ======= */}
                <div className='absolute top-[1px] right-0'>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleOptionsClick}
                        className="p-0"
                        style={{ padding: 0 }}
                    >
                        <MoreVert color="secondary" />
                    </IconButton>

                    <Menu
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleOptionsClose}
                        sx={{ // (d) change bg and colors after dark mode is established.
                            '& .MuiPaper-root': {
                                bgcolor: '#000',
                                color: '#fff',
                                borderRadius: '12px',
                                boxShadow: 'rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px'
                            },
                            '& .MuiMenuItem-root:hover': {
                                bgcolor: 'rgb(255 255 255 / .03)',
                            },
                            '& .MuiListItemIcon-root': {
                                color: '#fff'
                            }
                        }}
                    >
                        <MenuItem>
                            <ListItemIcon><SentimentDissatisfied fontSize="small" /></ListItemIcon>
                            <ListItemText>Not interested in this</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><SentimentDissatisfied fontSize="small" /></ListItemIcon>
                            <ListItemText>This trend is harmful or spammy</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            </button>
        </div>
    )
}