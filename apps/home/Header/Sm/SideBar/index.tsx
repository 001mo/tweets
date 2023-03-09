import Image from "next/image";
import { useContext } from "react";
import { Drawer, Divider, IconButton, Typography, useTheme, Button } from "@mui/material";
import { Add, Close, PersonOutlineOutlined } from "@mui/icons-material";
import SidebarAppearanceContext from "../SidebarAppearanceContext";
import { Wrapper } from "components";
import Accordions from "./Accordions";
import UpperSection from "./UpperSection";
import profilePic from "public/imgs/profile-pic.png";


export default function SideBar() {
    const { show, setShow } = useContext(SidebarAppearanceContext);
    const { palette: { mode } } = useTheme();

    return (
        <Drawer
            open={show}
            onClose={() => setShow(!show)}
            ModalProps={{
                sx: {
                    bgcolor: mode === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(91, 112, 131, 0.4)',
                    zIndex: 9999,
                }
            }}
            PaperProps={{
                sx: {
                    minWidth: 280,
                    maxWidth: '70%',
                    background: mode === 'light' ? '#fff' : '#000',
                }
            }}
        >
            {/* ============ account info section =========== */}
            <Wrapper>
                {/* === heading === */}
                <Wrapper>
                    <Wrapper sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 53,
                        px: 8,
                    }}>
                        <Wrapper>
                            <Typography fontWeight={600} fontSize={18}>Account info</Typography>
                        </Wrapper>
                        <Wrapper>
                            <IconButton onClick={() => setShow(!show)}>
                                <Close fontSize="small" />
                            </IconButton>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>

                {/* === info === */}
                <Wrapper sx={{
                    overflowY: 'auto',
                    flexGrow: 1,
                    flexShrink: 1
                }}>
                    <Wrapper pb={22}>
                        <Wrapper p={8}>
                            <Wrapper sx={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <Image
                                    alt="profile picture"
                                    src={profilePic}
                                    height={40}
                                    width={40}
                                    style={{ borderRadius: '50%' }}
                                />
                                <IconButton>
                                    <Add fontSize="small" />
                                </IconButton>
                            </Wrapper>

                            <Wrapper mt={4}>
                                <Typography lineHeight={1.25} component="span" fontWeight={600} fontSize={18}>Joe Khalaf</Typography>
                                <Typography lineHeight={1.25} component="span" color="text.secondary" fontSize={16}>@realJoeKhalaf</Typography>
                            </Wrapper>

                            <Wrapper sx={{ flexDirection: 'row', mt: 6 }}>
                                <Wrapper sx={{ flexDirection: 'row' }} mr={10}>
                                    <Typography fontSize={14} component="span" fontWeight={700}>153</Typography>
                                    <Typography fontSize={14} component="span" color="text.secondary">&nbsp;Following</Typography>
                                </Wrapper>
                                <Wrapper sx={{ flexDirection: 'row' }}>
                                    <Typography fontSize={14} component="span" fontWeight={700}>23.1M</Typography>
                                    <Typography fontSize={14} component="span" color="text.secondary">&nbsp;Followers</Typography>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>

            <UpperSection />

            <Divider/>

            {/* ============ Accordions section =========== */}
            <Accordions />
        </Drawer>
    )
}