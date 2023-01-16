import { Box, Button } from "@mui/material";
import { Wrapper, Paper } from "components";
import SuggestedUser from "./SuggestedUser";

export default function ToFollow() {
    return (
        <Paper>
            <Box sx={{ px: 8, py: 4 }}>
                <h2>Who To Follow</h2>
            </Box>

            {Array(2).fill('').map((x, i) => 
                <SuggestedUser key={i} userInfo={{}} />
            )}

            {/* <div className='wrapper px-4 py-3 transition-all duration-200 hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.03)] rounded-b-2xl'></div> */}
            <Wrapper sx={{
                p: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 16,
                borderBottomLeftRadius: 16,
                ":root:hover": {

                }
            }}>
                <Button variant="text" sx={{
                    display: 'flex',
                    alignItems: 'stretch',
                    textAlign: 'left',
                }}>
                    <div>
                        Show more
                    </div>
                </Button>
            </Wrapper>
        </Paper>
    )
}