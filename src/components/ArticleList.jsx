import { useEffect, useState } from 'react';
import { getArticles } from '../api';
import { ArticleCard } from './ArticleCard';
import { useParams } from 'react-router';

export const ArticleList = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const { topic } = useParams();

	useEffect(() => {
		setIsLoading(true);
		getArticles(topic)
			.then((allArticles) => {
				setArticles(allArticles);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => {
				setIsError(true);
			});
	}, [topic]);

	return isError ? (
		<p className="error-display">There has been an error!</p>
	) : isLoading ? (
		<p className="loading-display">Loading Articles!</p>
	) : (
		<>
			{articles.map((article) => {
				return <ArticleCard key={article.article_id} article={article} />;
			})}
		</>
	);
};
