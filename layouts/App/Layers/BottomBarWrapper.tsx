import { Box } from '@mui/material';
import useWindowSize from "hooks/useWindowSize";

export default function BottomBar({ children }) {
    const { width: scWidth } = useWindowSize();

    return scWidth < 500 ? (
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999 }}>
            {children}
        </Box>
    ) : <></>;
}