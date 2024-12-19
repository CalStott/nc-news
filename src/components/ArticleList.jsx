import { useEffect, useState } from 'react';
import { getArticles } from '../api';
import { ArticleCard } from './ArticleCard';
import { useParams, useSearchParams } from 'react-router';

export const ArticleList = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const { topic } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const [sortQuery, setSortQuery] = useState('created_at');
	const [orderQuery, setOrderQuery] = useState('desc');

	useEffect(() => {
		setIsLoading(true);
		getArticles(topic, sortQuery, orderQuery)
			.then((allArticles) => {
				setArticles(allArticles);
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => {
				setIsError(true);
			});
	}, [topic, sortQuery, orderQuery]);

	const handleQueryChange = (e) => {
		const { name, value } = e.target;
		if (name === 'sort_by') {
			setSortQuery(value);
		} else {
			setOrderQuery(value);
		}
		setSearchParams({ ...Object.fromEntries(searchParams), [name]: value });
	};

	return isError ? (
		<p className="error-display">There has been an error!</p>
	) : isLoading ? (
		<p className="loading-display">Loading Articles!</p>
	) : (
		<>
			<div className="article-sorting">
				<label>
					Sort by:
					<select name="sort_by" value={sortQuery} onChange={handleQueryChange}>
						<option value="created_at">Date</option>
						<option value="comment_count">Comment Count</option>
						<option value="votes">Votes</option>
					</select>
				</label>
				<label className="article-sorting">
					Order by:
					<select name="order" value={orderQuery} onChange={handleQueryChange}>
						<option value="desc">Descending</option>
						<option value="asc">Ascending</option>
					</select>
				</label>
			</div>
			<div>
				{articles.map((article) => {
					return <ArticleCard key={article.article_id} article={article} />;
				})}
			</div>
		</>
	);
};
