import './App.css';
import { Wordlist } from './components/wordlist';
// import { words } from './dataStore/words';
import React from 'react';
import { MainPage } from './MainPage';

function App() {
	return (
		<div style={{ height: '100vh' }}>
			<MainPage />
		</div>
		// <div className="App">
		// 	<header className="App-header">
		// 		{/* <img src={logo} className="App-logo" alt="logo" /> */}
		// 		<p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
		// 		{/* {words[words.length - 1].map((word, index) => (
		// 			<div key={index}>
		// 				{word}
		// 			</div>
		// 		))} */}
		// 		<Wordlist />
		// 	</header>
		// </div>
	);
}

export default App;
