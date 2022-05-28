import React from "react";
import "./SearchBox.css";

function SearchBox({ searchField, searchChange }) {
	return (
		<input
			type="search"
			placeholder="Search robots by name"
			className="SearchBox"
			onChange={searchChange}
		></input>
	);
}

export default SearchBox;
