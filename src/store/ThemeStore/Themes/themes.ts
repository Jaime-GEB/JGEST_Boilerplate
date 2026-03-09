import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

export const darkTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#303030',
            paper: '#424242',
        },
    },
});
export const lightTheme: Theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
    },
});

export const themes = {
    light: lightTheme,
    dark: darkTheme,
};

export type ThemeMode = keyof typeof themes;