import React from 'react';
import './Scroll.css';

const Scroll = (_props) => {
	console.log(_props);
	return (
		<div id='cardCanvas'>
			{_props.children}
		</div>
		);
};

export default Scroll;