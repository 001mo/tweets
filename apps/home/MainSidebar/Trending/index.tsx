import { Box, Button, Typography, useTheme } from "@mui/material";
import { Paper } from "components";
import Item from "./Item";

export default function Trending() {
    const theme = useTheme();

    return (
        <Paper sx={{ mb: 8 }}>
            <Box sx={{ px: 8, py: 6 }}>
                <Typography variant="h2" sx={{
                    fontWeight: 800,
                    fontSize: 20
                }}>What's happening</Typography>
            </Box>

            {Array(5).fill(0).map((x, i) => 
                <Item key={`home-mainSidebar-trending-item-${i}`} trendData={{}} />
            )}

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
        </Paper>
    );
}