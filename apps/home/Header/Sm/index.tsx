import { useEffect, useState } from 'react';
import { Slide, useTheme } from "@mui/material";
import { Wrapper } from "components";
import useWindowSize from "hooks/useWindowSize";
import UpperRow from "./UpperRow";
import LowerRow from './LowerRow';

export default function Header() {
    const { width: scWidth } = useWindowSize();
    const { palette: { mode }} = useTheme();

    
    const [prevScroll, setPrevScroll] = useState({ pos: 0, direction: 'down' });
    const [show, setShow] = useState(true);

    const addScrollListener = () => {
        document.addEventListener('scroll', (e) => {
            if(window.scrollY > prevScroll.pos) {
                setPrevScroll({ pos: window.scrollY, direction: 'down' });
                setShow(false);
                return;
            }
            setPrevScroll({ pos: window.scrollY, direction: 'up' });
            setShow(true);
        });
    }

    useEffect(() => {
        addScrollListener();
    }, [])

    return scWidth < 500 ? (
        // <Slide in={true} direction="down">
            <Wrapper sx={{
                bgcolor: mode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(12px)',
            }}>
                <UpperRow />
                <LowerRow />
            </Wrapper>
        // {/* </Slide> */}
    ) : <></>;
}
