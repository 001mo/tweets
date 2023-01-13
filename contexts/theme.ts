import { createContext, Dispatch } from 'react';
import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import defaultTheme, { lightPalette, darkPalette } from 'themes';


type ActionType = {
    type: 'CHANGE_MODE',
    payload: 'dark' | 'light',
} | {
    type: 'XXX_XXX', // e.g. CHANGE_BREAKPOINTS
    payload: Theme,
}

export const initTheme = createTheme(defaultTheme);

export const reducer = (state: Theme = initTheme, action: ActionType): Theme => {
    switch (action.type) {
        case 'CHANGE_MODE':
            return createTheme({
                ...state,
                palette: action.payload === 'dark' ? darkPalette : lightPalette,
            });
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