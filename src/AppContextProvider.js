import React, { createContext, useContext, useReducer, useState } from 'react';
import { words } from './dataStore/words';

const AppContext = createContext(null);

const useAppContext = () => {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error('useAppContext was used outside of its Provider');
	}
	return context;
};

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { wordsIndex: state.wordsIndex + 1 };
		case 'decrement':
			return { wordsIndex: state.wordsIndex - 1 };
		// case 'reset':
		// 	return init(action.payload);
		default:
			throw new Error();
	}
}

function AppContextProvider({ children }) {
	// const [state, dispatch] = useReducer(reducer, {
	// 	wordsIndex: words.length - 1,
	// });

	const [wordsIndex, setWordsIndex] = useState(words.length - 1);

	return (
		<AppContext.Provider
			// value={{ dispatch, state }}
			value={{ wordsIndex, setWordsIndex }}
		>
			{children}
		</AppContext.Provider>
	);
}

export { AppContextProvider, AppContext, useAppContext };
