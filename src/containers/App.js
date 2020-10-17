import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll  from '../components/Scroll';
import {robots} from '../components/robots';

//STATE // props are the thing which come out of state
// state is constantly changing but aas it passes onto the children 
// it become prop for that children

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots : robots,
			searchfield : ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		
	}

	render(){
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robots => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(robots.length === 0){
			return <h1>Loading</h1>
		}
		else{
			return (
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox serachChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);	
		}
	}
	
}

export default App;