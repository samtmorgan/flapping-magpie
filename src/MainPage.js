import React from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';

import { ArrowLeftBold, ArrowRightBold } from 'mdi-material-ui';

import { Wordlist } from './components/wordlist';
import { words } from './dataStore/words';
import { useAppContext } from './AppContextProvider';

// function init(initialIndex) {
// 	return { wordsIndex: initialIndex };
// }

export const MainPage = () => {
	const theme = useTheme();

	// const [state, dispatch] = useReducer(reducer, {
	// 	wordsIndex: words.length - 1,
	// });

	// const { dispatch, state } = AppContext();

	const { wordsIndex, setWordsIndex } = useAppContext();

	console.log(wordsIndex);

	return (
		<div
			style={{
				// height: '100vh',
				// width: '100vw',
				height: '100%',
				width: '100%',
				position: 'absolute',
				top: 0,
				left: 0,
				backgroundColor: '#ED217C',
				// backgroundColor: '#FF7F50',
				// backgroundColor: 'coral',s
				// backgroundColor: '#14B393', //dark green
				// backgroundColor: '#15BD82', //dark green
				// backgroundColor: theme.palette.yellow.main,

				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					// height: 'auto',
					// display: 'flex',
					// flex: 'auto',
					marginTop: 100,
					padding: 50,
					// backgroundColor: 'coral',
					backgroundColor: theme.palette.peach.main,

					borderTopLeftRadius: 40,
					borderTopRightRadius: 80,
					borderBottomRightRadius: 30,
					borderBottomLeftRadius: 90,
					// borderBottomLeftRadius
					// backgroundColor: '#4FFFDC',
					// backgroundColor: '#14B393',ß

					// width: '100%',
				}}
			>
				<Wordlist />
			</div>

			<div>
				<IconButton
					// disabled={state.wordsIndex < 1}
					disabled={wordsIndex < 1}
					// onClick={handleDecrement}
					// onClick={() => dispatch({ type: 'decrement' })}
					onClick={() =>
						setWordsIndex((previousState) => previousState - 1)
					}
				>
					<ArrowLeftBold />
				</IconButton>
				<IconButton
					// disabled={state.wordsIndex + 1 >= words.length}
					disabled={wordsIndex + 1 >= words.length}
					// onClick={handleIncrement}
					// onClick={() => dispatch({ type: 'increment' })}
					onClick={() =>
						setWordsIndex((previousState) => !previousState + 1)
					}
				>
					<ArrowRightBold />
				</IconButton>
			</div>
		</div>
	);
};
