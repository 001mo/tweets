import { Box } from "@mui/material";
import useWindowSize from "hooks/useWindowSize";

export default function Header() {
    const { width: scWidth } = useWindowSize();

    return scWidth < 500 ? (
        <Box sx={{ width: '100%', height: 53, bgcolor: 'red' }}>
            
        </Box>
    ) : <></>;
}
