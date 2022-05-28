import React from "react";
import Card from "./Card";
import "./CardList.css";

function CardList({ robots }) {
	const listCards = robots.map((user, i) => (
		<li key={user.id}>
			<Card id={user.id} name={user.name} email={user.email} />
		</li>
	));

	return (
		// eslint-disable-next-line jsx-a11y/no-redundant-roles
		<ul role="list" className="CardList">
			{listCards}
		</ul>
	);
}

export default CardList;
