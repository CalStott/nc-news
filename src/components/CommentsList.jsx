import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../api';
import { CommentsCard } from './CommentsCard';

export const CommentsList = ({ article_id }) => {
	const [allComments, setAllComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getCommentsByArticleId(article_id)
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
		<p className="loading-display">Loading comments!</p>
	) : (
		<>
			<section className="article-comments">
				<h2>Comments</h2>
				{allComments.length < 1 ? (
					<p>There are no comments on this article</p>
				) : (
					allComments.map((comment) => {
						return <CommentsCard comment={comment} key={comment.comment_id} />;
					})
				)}
			</section>
		</>
	);
};
