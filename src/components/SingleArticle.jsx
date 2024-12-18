import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getArticleById, getCommentsByArticleId } from '../api';

export const SingleArticle = () => {
	const params = useParams();
	const { article_id } = params;
	const [article, setArticle] = useState({});
	const [allComments, setAllComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id)
			.then((article) => {
				setArticle(article);
				return getCommentsByArticleId(article_id);
			})
			.then((comments) => {
				setAllComments(comments);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsError(true);
			});
	}, [article_id]);

	return isError ? (
		<p className="error-display">There has been an error!</p>
	) : isLoading ? (
		<p className="loading-display">Loading Articles!</p>
	) : (
		<>
			<section className="single-article">
				<div className="single-article-headings">
					<h2>{article.title}</h2>
					<p className="single-article-author">{article.author}</p>
				</div>
				<div>
					<img src={article.article_img_url} alt={article.title} />
				</div>
				<div>
					<p className="single-article-body">{article.body}</p>
				</div>
			</section>
			<section></section>
		</>
	);
};
