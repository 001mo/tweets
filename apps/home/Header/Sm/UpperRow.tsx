import { Wrapper } from "components";
import Image from "next/image";
import { Twitter } from '@mui/icons-material';
import profilePic from "public/imgs/profile-pic.png";

export default function UpperRow() {

    return (
        <Wrapper sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 53,
            px: 8,
        }}>
            <Wrapper sx={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: '50%'
            }}>
                <Image
                    alt="profile picture"
                    src={profilePic}
                    height={32}
                    width={32}
                    style={{ borderRadius: '50%' }}
                />
            </Wrapper>

            <Wrapper sx={{
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
                flexShrink: 1
            }}>
                <Twitter fontSize="medium" color="primary"/>
            </Wrapper>

            <Wrapper sx={{
                alignItems: 'flex-end',
                justifyContent: 'center',
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: '50%'
            }}>
                
            </Wrapper>
        </Wrapper>
    )
}