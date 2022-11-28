import './App.css';
// import { Wordlist } from './components/wordlist';
// import { words } from './dataStore/words';
import React from 'react';
import { MainPage } from './MainPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppContextProvider } from './AppContextProvider';

const theme = createTheme({
	palette: {
		// primary: {
		// 	main: red[500],
		// },
		peach: {
			main: '#FF9B71',
		},
		yellow: {
			main: '#FFFD82',
		},
	},
	text: {
		main: '#2D3047',
	},
});

function App() {
	return (
		// <div style={{ height: '100vh', backgroundColor: '#15BD82' }}>
		// </div>
		<ThemeProvider theme={theme}>
			<AppContextProvider>
				<MainPage />
			</AppContextProvider>
		</ThemeProvider>
	);
}

export default App;
