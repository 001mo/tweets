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
    // text: {
    //     primary: '#0f1419'
    // },
    background: {
        default: '#fff',
        paper: '#f7f9f9',
    },
    secondary: {
        main: '#ffffcc',
    }
}

export const darkPalette: PaletteOptions = {
    mode: 'dark',
    ...palette,
    // text: {
    //     primary: '#e7e9ea'
    // },
    background: {
        default: '#000',
        paper: '#16181c',
    },
    secondary: {
        main: '#000',
    }
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
        }
    },
    palette: lightPalette,
}

export default defaultTheme;