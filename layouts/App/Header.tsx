import { Box } from "@mui/material";
import { Wrapper } from "components";
import useWindowSize from "hooks/useWindowSize";

export default function Header({ children }) {
    const windowSize = useWindowSize();
    const _width = { sm: 68, sm2: 88, md: 68, md1: 88, lg: 275 };

    return (
        <Wrapper
        component="header"
        role="banner"
        sx={{
            flexGrow: { sm: 1 },
            flexShrink: { sm: 0 },
            alignItems: "flex-end",
        }}>
            {windowSize.width < 500 ?
                // works as a placeholder for absolute element "header" that's render under 500px 
                <Box sx={{ height: 53 }}></Box>
            :
                <Wrapper sx={{  width: _width }}>
                    <Box sx={{
                        position: 'fixed',
                        top: 0,
                        zIndex: 0,
                        height: '100%'
                    }}>
                        <Wrapper sx={{
                            height: '100%',
                            width: _width
                        }}>
                            <Wrapper>
                                { children }
                            </Wrapper>
                        </Wrapper>
                    </Box>
                </Wrapper>
            }
        </Wrapper>
    )
}