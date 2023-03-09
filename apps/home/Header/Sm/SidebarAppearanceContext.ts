import { createContext } from "react";

const SidebarAppearanceContext = createContext({
    show: false,
    setShow: (showArg) => showArg,
});

export default SidebarAppearanceContext;
