import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';
import { useWindowSize } from 'hooks';

type linkPropsType = {
    href: string,
    linkText: string,
    LinkIcon: typeof Icon,
}

export default function Link(props: linkPropsType) {
    const { href, linkText, LinkIcon } = props;
    const { width: scWidth } = useWindowSize();

    return (
        <a href={href} className="flex items-center max-[1281px]:justify-center hover:no-underline py-1">
            <Tooltip
            title={linkText}
            disableHoverListener={scWidth >= 1282}
            disableFocusListener={scWidth >= 1282}
            >
                <div className='flex flex-row items-center justify-center p-[12px] rounded-full hover:bg-[rgba(231,233,234,0.1)]'>
                    <div>
                        <LinkIcon fontSize='large' />
                    </div>
                    {scWidth >= 1282 &&
                        <div className='ml-3 font-bold text-lg'>
                            { linkText }
                        </div>
                    }
                </div>
            </Tooltip>
        </a>
    )
}