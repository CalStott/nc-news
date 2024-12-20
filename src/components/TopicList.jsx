import { useEffect, useState } from 'react';
import { getTopics } from '../api';
import { TopicCard } from './TopicCard';
import { ErrorPage } from './ErrorPage';

export const TopicList = () => {
	const [topics, setTopics] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getTopics()
			.then((allTopics) => {
				setTopics(allTopics);
				setIsLoading(false);
			})
			.catch(() => {
				setIsError(true);
			});
	}, []);

	return isError ? (
		// <p className="error-display">There has been an error!</p>
		<ErrorPage />
	) : isLoading ? (
		<p className="loading-display">Loading topics!</p>
	) : (
		<>
			{topics.map((topic) => (
				<TopicCard key={topic.slug} topic={topic} />
			))}
		</>
	);
};
