import { useContext } from "react";
import { Drawer, useTheme } from "@mui/material";
import SidebarAppearanceContext from "../SidebarAppearanceContext";

export default function SideBar() {
    const { show, setShow } = useContext(SidebarAppearanceContext);
    const { palette: { mode }} = useTheme();

    return (
        <Drawer
            open={show}
            elevation={24}
            onClose={() => setShow(!show) }
            ModalProps={{
                sx: { 
                    bgcolor: mode === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(91, 112, 131, 0.4)',
                    zIndex: 9999,
                }
            }}
            PaperProps={{
                sx: { background: mode === 'light' ? '#fff' : '#000' }
            }}
        >
            <h1>test</h1>
        </Drawer>
    )
}