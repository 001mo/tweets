import { PaletteMode } from "@mui/material";

type ChangeModeType = {
    type: 'CHANGE_MODE',
    payload: PaletteMode,
}

const changeMode = (payload: PaletteMode): ChangeModeType => {
    return {
        type: 'CHANGE_MODE',
        payload
    }
}

export default changeMode;