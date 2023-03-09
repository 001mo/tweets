import { PersonOutlineOutlined, ChatOutlined, BookmarkBorderOutlined, ListAltOutlined, Diversity1Outlined } from "@mui/icons-material";
import Item from "./Item";

export default function UpperSection() {
    return (
        <>
        <Item Icon={PersonOutlineOutlined}>Profile</Item>
        <Item Icon={ChatOutlined}>Topics</Item>
        <Item Icon={BookmarkBorderOutlined}>Bookmarks</Item>
        <Item Icon={ListAltOutlined}>Lists</Item>
        <Item Icon={Diversity1Outlined}>Twitter Circle</Item>
        </>
    )
}