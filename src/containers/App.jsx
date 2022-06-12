import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import SearchBox from "../components/SearchBox";
import "./App.css";

function App() {
	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setRobots(users));
	}, []);

	const onSearchChange = (event) => setSearchField(event.target.value);

	const filteredRobots = robots.filter((robot) => robot.name.toLocaleLowerCase().includes(searchField.toLowerCase()));

	return !robots.length ? (
		<p> Loading...</p >
	) : (
		<div className="App">
			<h1>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange} searchField={undefined} />
			<ErrorBoundary>
				<CardList robots={filteredRobots} />
			</ErrorBoundary>
		</div>
	);
}

export default App;
