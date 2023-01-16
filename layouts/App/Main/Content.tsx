import { Wrapper } from "components";
import { useTheme } from "@mui/material";

export default function App({ children }) {
    const theme = useTheme();

    return (
        <Wrapper sx={{
            flexGrow: 1,
            zIndex: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.mode === 'dark' ? '#2f3336' : '#eff3f4',
            maxWidth: { sm1: 600 }
        }}>
        { children }
        </Wrapper>
    )
}