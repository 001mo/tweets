import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Restore, Favorite, LocationOn } from "@mui/icons-material";

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
                label="Recents"
                icon={<Restore />}
            />
            <BottomNavigationAction
                label="Favorites"
                icon={<Favorite />}
            />
            <BottomNavigationAction
                label="Nearby"
                icon={<LocationOn />}
            />
        </BottomNavigation>
    )
}