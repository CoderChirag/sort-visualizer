import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider } from './contexts/theme/theme.context';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
