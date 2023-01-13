import { createContext, Dispatch } from 'react';
import { createTheme, Theme } from '@mui/material/styles';


type ActionType = {
    type: 'CHANGE_MODE',
    payload: 'dark' | 'light',
} | {
    type: 'XXX_XXX', // e.g. CHANGE_BREAKPOINTS
    payload: Theme,
}

export const initTheme = createTheme({
    // initial theme here
});

export const reducer = (state: Theme = initTheme, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_MODE':
            state = {...state};
            state.palette.mode = action.payload;
            return createTheme(state);
        default:
            return createTheme(state);
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