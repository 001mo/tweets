import Account from "./Account";
import { Link } from "components/Header";
import { Twitter, HomeRounded, TagRounded } from '@mui/icons-material/';

const username = 'realJoeKhalaf';

export default function Header() {
    return (
        <div className='wrapper h-full min-[1282px]:items-start'>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col">
                    <div className="py-2 px-[12px] flex items-center justify-center min-[1282px]:justify-start">
                        <Twitter fontSize="large" />
                    </div>
                    <nav className="flex flex-col" role="navigation">
                        <Link
                        href="/home"
                        LinkIcon={HomeRounded}
                        linkText="Home"/>
                        <Link
                        href="/explore"
                        LinkIcon={TagRounded}
                        linkText="Explore"/>
                        <Link
                        href="/notifications"
                        LinkIcon={HomeRounded}
                        linkText="Notifications"/>
                        <Link
                        href="/messages"
                        LinkIcon={HomeRounded}
                        linkText="Messages"/>
                        <Link
                        href="/i/bookmakrs"
                        LinkIcon={HomeRounded}
                        linkText="Bookmarks"/>
                        <Link
                        href={`${username}/lists`}
                        LinkIcon={HomeRounded}
                        linkText="Lists"/>
                        <Link
                        href={`/${username}`}
                        LinkIcon={HomeRounded}
                        linkText="Profile"/>
                        <Link
                        href="/more"
                        LinkIcon={HomeRounded}
                        linkText="More"/>
                    </nav>
                    <div>
                        {/* tweeting button */}
                    </div>
                </div>

                <div className="wrapper">
                    <Account />
                </div>
            </div>

        </div>
    )
}