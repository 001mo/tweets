import { ReactNode } from 'react';
import { Box, BoxProps } from "@mui/material";

export default function Wrapper(props: BoxProps) {
    const { children, sx, ...others } = props;

    return (
        <Box
        { ...others }
        sx={{
            boxSizing: 'border-box', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            flexBasis: 'auto',
            flexShrink: 0,
            position: 'relative',
            border: '0 solid black',
            ...sx,
        }}>
            { children }
        </Box>
    )
}