import React from 'react';
import posed from 'react-pose';

const Character = props => {
	const Container = posed.div({
		// hoverable: true,
		exit: {
			x: '-100%',
		},
		enter: {
			x: '0%',
			beforeChildren: true,
			staggerChildren: 10,
		},
		// init: {
		// 	scale: 1,
		// 	boxShadow: '0px 0px 0px rgba(0,0,0,0)',
		// },
		// hover: {
		// 	scale: 1.1,
		// 	boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
		// },
	});

	const CharName = posed.div({
		hoverable: true,
		pressable: true,
		exit: {
			x: '-100%',
		},
		enter: {
			x: '0%',
			beforeChildren: true,
			staggerChildren: 90,
		},
		init: {
			scale: 1,
		},
		hover: {
			scale: 1.2,
		},
		press: {
			scale: 1.1,
		},
	});

	return (
		<Container className="chars" initialPose="exit" pose="enter">
			<div className="char-name">
				<CharName className="name" initialPose="exit" pose="enter">
					{props.chars.name}
				</CharName>
			</div>
			<div className="char-stats">Height: {props.chars.height}</div>
			<div className="char-stats">Mass: {props.chars.mass}</div>
			<div className="char-stats">Hair Color: {props.chars.hair_color}</div>
			<div className="char-stats">Skin Color: {props.chars.skin_color}</div>
			<div className="char-stats">Eye Color: {props.chars.eye_color}</div>
			{/* <img src={props.chars.homeWorld} />
			<div>{props.chars.hair_color}</div>
			<div>{props.chars.hair_color}</div>
		<div>{props.chars.hair_color}</div> */}
		</Container>
	);
};

export default Character;
