import { createContext, useState, useMemo, useEffect } from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from '@mui/material/styles';

export const ThemeContext = createContext({
	theme: null,
	setTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState('light');
	const [themeUpdated, setThemeUpdated] = useState(false);
	useEffect(() => {
		if (window.localStorage && window.localStorage.getItem('theme')) {
			const theme = window.localStorage.getItem('theme');
			console.log(theme);
			if (theme === 'dark' || theme === 'light') {
				setMode(theme);
			} else {
				window.localStorage.setItem('theme', 'light');
				setMode('light');
			}
		} else if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			window.localStorage.setItem('theme', 'dark');
			setMode('dark');
		}
		setThemeUpdated(true);
	}, []);

	useEffect(() => {
		if (themeUpdated) {
			window.localStorage.setItem('theme', mode);
		}
	}, [mode, themeUpdated]);

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
									main: '#02082a',
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
									secondary: 'rgba(255,255,255,0.7)',
									disabled: 'rgba(255,255,255,0.5)',
									hint: 'rgba(255,255,255,0.5)',
								},
						  }
						: {
								type: 'light',
								primary: {
									main: '#ccff90',
									light: '#dfffdc',
									dark: '#4edc4e',
									contrastText: '#000000',
								},
								secondary: {
									main: '#ff1744',
									dark: '#d50000',
									contrastText: '#ffffff',
								},
								background: {
									default: '#dfffdc',
								},
						  }),
				},
				components: {
					...(mode === 'dark'
						? {
								type: 'dark',
								MuiDrawer: {
									styleOverrides: {
										paper: {
											backgroundColor: '#000524',
											boxShadow:
												'0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)',
											borderRight: 0,
										},
										paperAnchorLeft: {
											right: 'auto',
											left: 0,
										},
									},
								},
								MuiCssBaseline: {
									styleOverrides: {
										body: {
											scrollbarColor: '#c6ff00 #191e3d',
											'&*': {
												scrollbarWidth: 'thin',
												scrollbarColor:
													'#c6ff00 #191e3d',
												boxSizing: 'border-box',
											},
											'&*::before, *::after': {
												boxSizing: 'border-box',
											},
											'&::-webkit-scrollbar, & *::-webkit-scrollbar':
												{
													width: '6px',
												},
											'&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track':
												{
													background: '#191e3d',
												},
											'&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb':
												{
													backgroundColor: '#c6ff00',
													borderRadius: '10px',
												},
										},
									},
								},
						  }
						: {
								type: 'light',
								MuiDrawer: {
									styleOverrides: {
										paper: {
											backgroundColor: '#d4e5d8',
											boxShadow:
												'0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)',
											borderRight: 0,
										},
										paperAnchorLeft: {
											right: 'auto',
											left: 0,
										},
									},
								},
								MuiCssBaseline: {
									styleOverrides: {
										body: {
											scrollbarColor: '#ff1744 #ccff90',
											'&*': {
												scrollbarWidth: 'thin',
												scrollbarColor:
													'#ff1744 #ccff90',
												boxSizing: 'border-box',
											},
											'&*::before, *::after': {
												boxSizing: 'border-box',
											},
											'&::-webkit-scrollbar, & *::-webkit-scrollbar':
												{
													width: '6px',
												},
											'&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track':
												{
													background: '#ccff90',
												},
											'&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb':
												{
													backgroundColor: '#ff1744',
													borderRadius: '10px',
												},
										},
									},
								},
						  }),
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
