import { Box, Typography } from "@mui/material";
import { Wrapper } from "components";
import Link from "next/link";


const LinkWrapper = ({ children, selected }) => {
    return (
        <Wrapper sx={{
            px: 8,
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Wrapper py={8}>
                <Link href="/home">
                    <Wrapper component="a">
                        <Typography component="span" sx={!selected ? {color: 'text.secondary'} : { fontWeight: 700 }}>
                            { children }
                        </Typography>
                    </Wrapper>
                </Link>

                {/* blue underline */}
                <Box sx={!selected ? {} : {
                    position: 'absolute',
                    bottom: 0,
                    height: 4,
                    bgcolor: 'primary.main',
                    width: '100%',
                    borderRadius: 9999
                }}/>
            </Wrapper>
        </Wrapper>
    );
} 

export default function LowerRow() {
    return (
        <Wrapper sx={{
            flexDirection: "row",
            height: 53
        }}>
            <LinkWrapper selected={true}>For you</LinkWrapper>
            <LinkWrapper selected={false}>Following</LinkWrapper>
        </Wrapper>
    )
}