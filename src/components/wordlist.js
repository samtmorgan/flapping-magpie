import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { format } from 'date-fns';
import { AppContext, useAppContext } from '../AppContextProvider';
import { words } from '../dataStore/words';

// import { words } from '../dataStore/words';

export const Wordlist = () => {
	const theme = useTheme();

	const { wordsIndex } = useAppContext();
	console.log({ wordsIndex });

	// wordData={words[state.wordsIndex]}

	// const now = new Date();
	// console.log({ now, wordData }, wordData.timestamp);
	// const date = new Date(1668189600 * 1000);
	// console.log(date);
	return (
		<div>
			<Typography>
				{format(words[wordsIndex].timestamp * 1000, 'dd/MM/yyyy')}
			</Typography>
			{/* <Typography>{format(now, 'dd/MM/yyyy')}</Typography> */}

			{words[wordsIndex].words.map((word, index) => (
				<Typography
					style={{ color: theme.text.main }}
					key={index}
					variant="h5"
				>
					{word}
				</Typography>
			))}
		</div>
	);
};
