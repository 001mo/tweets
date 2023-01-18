import { useEffect, useRef, useState } from "react";
import { Box } from '@mui/material';
import useWindowSize from "hooks/useWindowSize";

export default function HeaderWrapper({ children }) {
    const { width: scWidth, height: scHeight } = useWindowSize();
    const [childrenHeight, setChildrenHeight] = useState<number>();
    const wrapperRef = useRef<HTMLDivElement>();

    const getChildrenHeight = () => { // (d)
        return 0;
    }

    useEffect(() => {
        setChildrenHeight(getChildrenHeight());
    }, [scWidth, scHeight])

    return scWidth < 500 ? (
        <>
            <Box sx={{ height: childrenHeight }}/>

            <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
                <div ref={wrapperRef}>
                    { children }
                </div>
            </Box>
        </>
    ) : <></>;
}
