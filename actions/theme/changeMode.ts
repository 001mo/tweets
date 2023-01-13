import { PaletteMode } from "@mui/material";

const changeMode = (payload: PaletteMode) => ({
    type: 'CHANGE_MODE',
    payload
})

export default changeMode;