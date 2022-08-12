import { createContext, useState, useMemo } from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from '@mui/material/styles';

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
					...(mode === 'dark'
						? {
								type: 'dark',
								primary: {
									main: '#091134',
									light: '#091c34',
									dark: '#070422',
									contrastText: '#fff',
								},
								secondary: {
									main: '#c6ff00',
									light: 'rgba(198,255,0,0.85)',
									dark: '#ff0',
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
						  }
						: {}),
				},
				components: {
					...(mode === 'dark'
						? {
								type: 'dark',
								MuiDrawer: {
									styleOverrides: {
										paper: {
											backgroundColor: '#091c34',
										},
									},
								},
						  }
						: {}),
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
