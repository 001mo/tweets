import { useEffect, useState } from 'react';
import { Slide, useTheme } from "@mui/material";
import { Wrapper } from "components";
import useWindowSize from "hooks/useWindowSize";
import UpperRow from "./UpperRow";
import LowerRow from './LowerRow';

export default function Header() {
    const { width: scWidth } = useWindowSize();
    const { palette: { mode }} = useTheme();

    const [prevScroll, setPrevScroll] = useState(0);
    const [show, setShow] = useState(true);

    const handleScroll = (e) => { // (d) fix this function
        const scrollPos = document.documentElement.scrollTop;
        if(scrollPos > prevScroll) {
            setPrevScroll(scrollPos);
            setShow(false)
            return;
        }
        setPrevScroll(scrollPos);
        setShow(true)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [])

    return scWidth < 500 ? (
        <Wrapper sx={{
            transitionDuration: '350ms',
            transitionTimingFunction: 'cubic-bezier(0, 0, 0, 1)',
            transform: show ? 'translateY(0)' : 'translateY(-53px)',
            bgcolor: mode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(12px)',
        }}>
            <UpperRow />
            <LowerRow />
        </Wrapper>
    ) : <></>;
}
