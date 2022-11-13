import React, { useCallback, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';

import { ArrowLeftBold, ArrowRightBold } from 'mdi-material-ui';

import { Wordlist } from './components/wordlist';
import { words } from './dataStore/words';

export const MainPage = () => {
	const [wordsIndex, setWordsIndex] = useState(words.length - 1);
	const theme = useTheme();

	const handleIncrement = useCallback(() => {
		setWordsIndex((previousState) => previousState + 1);
	});

	const handleDecrement = useCallback(() => {
		setWordsIndex((previousState) => previousState - 1);
	});

	console.log(words.length, { wordsIndex });

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
				// backgroundColor: '#B34B25',
				// backgroundColor: '#FF7F50',
				// backgroundColor: 'coral',
				// backgroundColor: '#14B393', //dark green
				// backgroundColor: '#15BD82', //dark green
				backgroundColor: theme.palette.yellow.main,

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
				<Wordlist wordData={words[wordsIndex]} />
			</div>

			<div>
				<IconButton disabled={wordsIndex < 1} onClick={handleDecrement}>
					<ArrowLeftBold />
				</IconButton>
				<IconButton
					disabled={wordsIndex + 1 >= words.length}
					onClick={handleIncrement}
				>
					<ArrowRightBold />
				</IconButton>
			</div>
		</div>
	);
};
