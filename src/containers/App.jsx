import React, { Component } from "react";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import SearchBox from "../components/SearchBox";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { robots, searchField } = this.state;

		const filteredRobots = robots.filter((robot) =>
			robot.name.toLocaleLowerCase().includes(searchField.toLowerCase())
		);

		return !robots.length ? (
			<p>Loading...</p>
		) : (
			<div className="App">
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} searchField={undefined} />
				<ErrorBoundary>
					<CardList robots={filteredRobots} />
				</ErrorBoundary>
			</div>
		);
	}
}

export default App;
