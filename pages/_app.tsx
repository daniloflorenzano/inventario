import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/x-data-grid';

import { AuthProvider } from '../contexts/AuthContext';

const theme = createTheme(
	{
		typography: {
			fontFamily: [
				'Ubuntu',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
		},
		palette: {
			primary: { main: '#000000' },
			secondary: { main: '#ffff' },
		},
	},
	ptBR
);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</ThemeProvider>
	);
}

export default MyApp;
