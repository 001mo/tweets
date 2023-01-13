import { PaletteOptions, ThemeOptions } from '@mui/material';

const palette: PaletteOptions = {
    primary: {
        main: '#1d9bf0',
        contrastText: '#fff',
    },
}

export const lightPalette: PaletteOptions = {
    mode: 'light',
    ...palette,
    secondary: {
        main: '#ffffcc',
    }
}

export const darkPalette: PaletteOptions = {
    mode: 'dark',
    ...palette,
    secondary: {
        main: '#000',
    }
}

const defaultTheme: ThemeOptions = {
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