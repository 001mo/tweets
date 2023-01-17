import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { HomeRounded, Search, NotificationsNoneOutlined, EmailOutlined } from "@mui/icons-material";

export default function NavBar() {
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction
                label="Home"
                icon={<HomeRounded />}
            />
            <BottomNavigationAction
                label="Search"
                icon={<Search />}
            />
            <BottomNavigationAction
                label="Notifications"
                icon={<NotificationsNoneOutlined />}
            />
            <BottomNavigationAction
                label="Messages"
                icon={<EmailOutlined />}
            />
        </BottomNavigation>
    )
}