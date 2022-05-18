import "./Card.css";

function Card({ id, name, email }) {
	return (
		<div className="Card">
			<img
				src={`https://robohash.org/${id}?size=200x200`}
				alt=""
				width="200"
				height="200"
			></img>
			<p className="Card-name">{name}</p>
			<p className="Card-email">{email}</p>
		</div>
	);
}

export default Card;
