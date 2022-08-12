import { createContext, useState, useEffect } from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#091c34',
			light: '#091c34',
			dark: '#070422',
		},
		secondary: {
			main: '#c6ff00',
			light: 'rgba(198,255,0,0.85)',
			dark: '#eeff41',
			contrastText: '#1a2100',
		},
		background: {
			default: '#161625',
			paper: '#282828',
		},
	},
});

const lightTheme = createTheme({
	palette: {
		type: 'light',
		background: {
			default: '#aaa',
		},
	},
});

export const ThemeContext = createContext({
	theme: null,
	setTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('dark');
	const [muiTheme, setMuiTheme] = useState(darkTheme);

	const value = { theme, setTheme };

	useEffect(() => {
		if (theme === 'dark') {
			setMuiTheme(darkTheme);
		} else {
			setMuiTheme(lightTheme);
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={value}>
			<MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};
