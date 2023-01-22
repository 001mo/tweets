import { useEffect, useState } from 'react';
import { useTheme } from "@mui/material";
import SidebarAppearanceContext from './SidebarAppearanceContext';
import useWindowSize from "hooks/useWindowSize";
import { Wrapper } from "components";
import UpperRow from "./UpperRow";
import LowerRow from './LowerRow';
import SideBar from './SideBar';


export default function Header() {
    const { width: scWidth } = useWindowSize();
    const { palette: { mode }} = useTheme();

    const [showSidebar, setShowSidebar] = useState(false);

    const [prevScroll, setPrevScroll] = useState(0);
    const [showUpperRow, setShowUpperRow] = useState(true);

    const handleScroll = (e) => { // (d) fix this function
        const scrollPos = document.documentElement.scrollTop;
        if(scrollPos > prevScroll) {
            setPrevScroll(scrollPos);
            setShowUpperRow(false)
            return;
        }
        setPrevScroll(scrollPos);
        setShowUpperRow(true)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [])

    return scWidth < 500 ? (
        <SidebarAppearanceContext.Provider value={{ show: showSidebar, setShow: setShowSidebar}}>
            <Wrapper sx={{ zIndex: 9999 }}>
                <Wrapper sx={{
                    transitionDuration: '350ms',
                    transitionTimingFunction: 'cubic-bezier(0, 0, 0, 1)',
                    transform: showUpperRow ? 'translateY(0)' : 'translateY(-53px)',
                    bgcolor: mode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(12px)',
                }}>
                    <UpperRow />
                    <LowerRow />
                </Wrapper>

                <SideBar />
            </Wrapper>
        </SidebarAppearanceContext.Provider>
    ) : <></>;
}
