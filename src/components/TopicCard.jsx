import { Link } from 'react-router';

export const TopicCard = ({ topic }) => {
	const { slug, description } = topic;
	const firstLetter = slug.charAt(0).toUpperCase();

	return (
		<div className="topic-card">
			<div>
				<Link to={{ pathname: `/topics/${slug}` }}>
					<h2>{firstLetter + slug.slice(1, slug.length)}</h2>
				</Link>
				<br />
				<p>{description}</p>
			</div>
		</div>
	);
};
