import { Button, ButtonProps } from "@mui/material";

export default function WrapperButton(props: ButtonProps) {
    const { children, sx, ...others } = props;

    return (
        <Button
            {...others}
            variant="text"
            sx={(theme) => ({
                boxSizing: 'border-box', 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                flexBasis: 'auto',
                flexShrink: 0,
                position: 'relative',
                textTransform: 'none',
                textAlign: 'left',
                border: 0,
                borderRadius: 0,
                px: 8,
                py: 6,
                '&:hover': {
                    bgcolor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)'
                }
            })}
        >
            { children }
        </Button>
    )
}