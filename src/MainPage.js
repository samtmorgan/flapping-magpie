import React from 'react';

import { Wordlist } from './components/wordlist';

export const MainPage = () => {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				justifyItems: 'center',
				backgroundColor: 'coral',
			}}
		>
			<div>
				<Wordlist />
			</div>
		</div>
	);
};
