import NavBar from './NavBar';
import TweetButton from './TweetButton';
import useWindowSize from "hooks/useWindowSize";

export default function BottomBar() {
    const { width: scWidth } = useWindowSize();

    return scWidth < 500 ? (
        <>
            <TweetButton />
            <NavBar />
        </>
    ) : <></>;
}