import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import './App.css';
import Scroll from './Scroll';


class App extends React.Component {

	constructor() {
		super()
		this.state={
			arrayToRender: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(_response=>_response.json())
		.then(_users => this.setState({arrayToRender: _users}))
	}

	onSearchChange = (_evnt) => {
		this.setState({searchField: _evnt.target.value});
	}

	render() {
		const filterResults = this.state.arrayToRender.filter((_robot)=>{return (_robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))});
		return (
		<div className='tc'>
			<div className='pa2'>
				<h1 className='f1'>Robot Friends</h1>
				<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Type something!' onChange={this.onSearchChange}/>
			</div>
			<Scroll>
				<CardList param1={filterResults} />	
			</Scroll>
		</div>
		);
	}

}

export default App;