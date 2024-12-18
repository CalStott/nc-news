import { useState, useEffect } from 'react';
import { getArticleById } from '../api';
import { ArticleVoting } from './ArticleVoting';

export const ArticleContent = ({ article_id }) => {
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id)
			.then((article) => {
				setArticle(article);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsError(true);
			});
	}, [article_id]);

	return isError ? (
		<p className="error-display">There has been an error!</p>
	) : isLoading ? (
		<p className="loading-display">Loading article!</p>
	) : (
		<section className="single-article">
			<div className="single-article-headings">
				<h2>{article.title}</h2>
				<p className="single-article-author">{article.author}</p>
			</div>

			<div className="article-main">
				<img src={article.article_img_url} alt={article.title} />
				<p className="single-article-body">{article.body}</p>
			</div>
			<ArticleVoting article_id={article_id} votes={article.votes} />
		</section>
	);
};
