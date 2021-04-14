import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json())
		.then( users => this.setState({ robots: users}) );
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter( (robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});
		return !robots.length ?  (
				<div className='tc vh-100'>
					<div className='loadingio-spinner-bean-eater-ccmtbzyh4z'><div className="ldio-zipdnoa8q9">
					<div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
					</div></div>
				</div>
				)
		: (
			<div className='tc'>
				<h1>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={ filteredRobots } />
				</Scroll>
			</div>
		)
	}
}

export default App;