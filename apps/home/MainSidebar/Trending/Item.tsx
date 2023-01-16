import React, { useState } from "react";
import { SentimentDissatisfied, MoreHoriz } from '@mui/icons-material';
import { Wrapper, WrapperButton } from "components";
import {
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Box,
    Typography
} from "@mui/material";


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
        <Wrapper>
            <WrapperButton>
                <Wrapper alignItems="flex-start">
                    <div>
                        <Typography fontSize={13} color="text.secondary">
                            Trending
                        </Typography>
                    </div>
                    <div>
                        <Typography fontSize={15} fontWeight={700} color="text.primary">Andrew Tate</Typography>
                    </div>
                    <div>
                        <Typography fontSize={13} color="text.secondary">
                            39.8k Tweets
                        </Typography>
                    </div>

                    {/* ===== options button ======= */}
                    <Box sx={{
                        position: 'absolute',
                        top: 1,
                        right: 0,
                    }}>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleOptionsClick}
                            sx={(theme) => ({ color: theme.palette.text.secondary, p: 0 })}
                        >
                            <MoreHoriz fontSize={'small'} />
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
                    </Box>
                </Wrapper>
            </WrapperButton>
        </Wrapper>
    )
}