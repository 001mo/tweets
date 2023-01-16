import { Box } from "@mui/material";
import { Wrapper } from "components";
import useWindowSize from "hooks/useWindowSize";

export default function SideBar({ children }) {
    const windowSize = useWindowSize();

    return windowSize.width < 1005 ? <></> : (
        <Box sx={{
            mr: 5,
            width: { xs: 290, md2: 350 }
        }}>
            <Wrapper>
                {children }
            </Wrapper>

            <div>
                2022 Twitter. Inc.
            </div>
        </Box>
    );
}