import { Link } from 'react-router';

export const Header = () => {
	return (
		<>
			<h1>NC News</h1>
			<nav>
				<Link to="/">Home</Link>
			</nav>
		</>
	);
};
