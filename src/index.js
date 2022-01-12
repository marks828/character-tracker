import React from 'react';
import ReactDOM from 'react-dom';
// import Character from './characters/Character';
// import Character from './character-components-wprops/CharacterSummonComponent';
import Character from './stats/Character';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Character />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
