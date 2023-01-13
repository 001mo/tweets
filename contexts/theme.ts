import { createContext, Dispatch } from 'react';
import { createTheme, Theme } from '@mui/material/styles';
import { lightPalette, darkPalette } from 'themes';


type ActionType = {
    type: 'CHANGE_MODE',
    payload: 'dark' | 'light',
} | {
    type: 'XXX_XXX', // e.g. CHANGE_BREAKPOINTS
    payload: Theme,
}

export const initTheme = createTheme({
    palette: lightPalette,
});

export const reducer = (state: Theme = initTheme, action: ActionType): Theme => {
    switch (action.type) {
        case 'CHANGE_MODE':
            state = {...state};
            if(action.payload === 'dark'){
                return createTheme({palette: darkPalette});
            }
            return createTheme({palette: lightPalette});
        default:
            return state;
    }
}

type ThemeContextType = {
    state: Theme,
    dispatch: Dispatch<any>,
}

const ThemeContext = createContext<ThemeContextType>({
    state: initTheme,
    dispatch: () => null
});

export default ThemeContext;