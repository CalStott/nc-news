import { Link } from 'react-router';

export const Header = () => {
	return (
		<>
			<p>You are logged in as: cooljmessy</p>
			<h1>NC News</h1>
			<nav>
				<Link to="/">Home</Link>
			</nav>
		</>
	);
};
