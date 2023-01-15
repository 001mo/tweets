import { PaletteOptions, ThemeOptions } from '@mui/material';

const palette: PaletteOptions = {
    primary: {
        main: '#1d9bf0',
        dark: '#1a8cd8',
        contrastText: '#fff',
    },
}

export const lightPalette: PaletteOptions = {
    mode: 'light',
    ...palette,
    text: {
        primary: '#0f1419',
        secondary: '#536471'
    },
    background: {
        default: '#fff',
        paper: '#f7f9f9',
    },
}

export const darkPalette: PaletteOptions = {
    mode: 'dark',
    ...palette,
    text: {
        primary: '#e7e9ea',
        secondary: '#536471'
    },
    background: {
        default: '#000',
        paper: '#16181c',
    },
}

const defaultTheme: ThemeOptions = {
    typography: {
        fontSize: 15,
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            }
        },
    },
    palette: lightPalette,
}

export default defaultTheme;