import { ReactNode } from 'react';
import { Paper as MuiPaper, SxProps } from "@mui/material";

type PropsType = {
    children: ReactNode,
    sx?: SxProps
}

export default function Paper(props: PropsType) {
    const { children, sx } = props;

    return (
        <MuiPaper sx={{
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
        </MuiPaper>
    )
}