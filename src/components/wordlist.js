import React from 'react';
import { Typography } from '@mui/material';

import { words } from '../dataStore/words';

export const Wordlist = () => {
	return words[words.length - 1].map((word, index) => (
		<Typography key={index}>{word}</Typography>
	));
};
