import { createContext, useState, useMemo } from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from '@mui/material/styles';

const theme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#091c34',
			light: '#091c34',
			dark: '#070422',
			contrastText: '#fff',
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
		text: {
			main: '#ffffff',
			primary: '#ffffff',
			secondary: '#rgba(255,255,255,0.7)',
			disabled: '#rgba(255,255,255,0.5)',
			hint: '#rgba(255,255,255,0.5)',
		},
	},
	components: {
		type: 'dark',
		MuiDrawer: {
			styleOverrides: {
				paper: {
					backgroundColor: '#091c34',
				},
			},
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
	const [mode, setMode] = useState('dark');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
			},
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					// ...(mode === 'dark'
					//     ? {
					//  }
					// )
				},
			}),
		[mode]
	);

	return (
		<ThemeContext.Provider value={colorMode}>
			<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};
