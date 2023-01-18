import { Slide, useTheme } from "@mui/material";
import { Wrapper } from "components";
import useWindowSize from "hooks/useWindowSize";
import UpperRow from "./UpperRow";

export default function Header() {
    const { width: scWidth } = useWindowSize();
    const { palette: { mode }} = useTheme();

    return scWidth < 500 ? (
        // <Slide in={true} direction="down">
            <Wrapper sx={{
                bgcolor: mode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(12px)',
            }}>
                <UpperRow />
            </Wrapper>
        // {/* </Slide> */}
    ) : <></>;
}
