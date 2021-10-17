import React from 'react';
import Card from './Card';

const CardList = ({param1}) => {
	return (
		param1.map((user, i)=>{
				return <Card key = {i} name={user.name} email={user.email}/>})
		)
	}


export default CardList;