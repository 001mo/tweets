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
    secondary: {
        main: '#0f1419',
        dark: '#22272b',
    },
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
    secondary: {
        main: '#eff3f4',
        dark: '#dee2e3',
    },
    text: {
        primary: '#e7e9ea',
        secondary: '#536471'
    },
    background: {
        default: '#000',
        paper: '#16181c',
    },
}

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        sm1: true;
        sm2: true;
        sm3: true;
        md: true;
        md1: true;
        md2: true;
        lg: true;
        xl: false;
    }
}

const defaultTheme: ThemeOptions = {
    breakpoints: {
        keys: [
            "xs",
            "sm",
            "sm1",
            "sm2",
            "sm3",
            "md",
            "md1",
            "md2",
            "lg",
        ],
        values: {
            xs: 0,
            sm: 500,
            sm1: 600,
            sm2: 617,
            sm3: 705,
            md: 1005,
            md1: 1025,
            md2: 1095,
            lg: 1282,
        }
    },
    typography: {
        fontFamily: 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
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
    spacing: 2,
    shape: {
        borderRadius: 16,
    }
}

export default defaultTheme;