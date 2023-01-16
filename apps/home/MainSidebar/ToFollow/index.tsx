import { Box, Button, Typography, useTheme } from "@mui/material";
import { Wrapper, Paper } from "components";
import SuggestedUser from "./SuggestedUser";

export default function ToFollow() {
    const theme = useTheme();

    return (
        <Paper>
            <Box sx={{ px: 8, py: 6 }}>
                <Typography variant="h2" sx={{
                    fontWeight: 800,
                    fontSize: 20
                }}>Who To Follow</Typography>
            </Box>

            {Array(2).fill('').map((x, i) =>
                <SuggestedUser key={i} userInfo={{}} />
            )}

            <Wrapper sx={{
                p: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
            }}>
                <Button
                    variant="text"
                    sx={{
                        p: 8,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopRightRadius: 0,
                        justifyContent: "flex-start",
                        textTransform: 'none',
                        '&:hover': {
                            bgcolor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)'
                        }
                    }}>
                    Show more
                </Button>
            </Wrapper>
        </Paper>
    )
}