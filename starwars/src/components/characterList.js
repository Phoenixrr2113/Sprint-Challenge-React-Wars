import React from 'react';
import Character from './character';
import './StarWars.css';

const CharacterList = props => {
	const characters = props.chars;

	if (characters) {
		return (
			<div className="char-container">
				{characters.map(chars => {
					return <Character chars={chars} key={chars.created} />;
				})}
			</div>
		);
	}
};

export default CharacterList;
