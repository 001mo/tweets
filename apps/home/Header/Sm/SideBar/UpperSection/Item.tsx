import { Button, Typography } from "@mui/material";

export default function Item({ Icon, children }) {
    return (
        <Button
            variant="text"
            color="inherit"
            size="large"
            startIcon={<Icon fontSize="large" fontWeight={700} />}
            sx={{
                textTransform: 'capitalize',
                justifyContent: 'flex-start',
                borderRadius: 0,
                p: 8,
            }}>
                <Typography
                fontWeight={500}
                component="span"
                textTransform="capitalize">
                    { children }
                </Typography>
            </Button>
    )
}