import { useEffect, useState } from 'react';
import {
	getCommentsByArticleId,
	postCommentOnArticle,
	deleteCommentById,
} from '../api';
import { CommentsCard } from './CommentsCard';

export const CommentsList = ({ article_id }) => {
	const [allComments, setAllComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [inputComment, setInputComment] = useState('');
	const [isPosted, setIsPosted] = useState(false);
	const [isCommentError, setIsCommentError] = useState(false);

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

	const handleChange = (e) => {
		setInputComment(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsCommentError(false);
		setIsPosted(true);

		if (inputComment.trim().length !== 0) {
			postCommentOnArticle(article_id, inputComment)
				.then((newComment) => {
					setAllComments((currComments) => [newComment, ...currComments]);
					setIsPosted(false);
				})
				.catch(() => {
					setIsCommentError(true);
					setIsPosted(false);
				});
			setInputComment('');
		} else {
			setIsCommentError(true);
			setIsPosted(false);
		}
	};

	const handleDelete = (e) => {
		const deletedCommentId = e.target.value;
		deleteCommentById(deletedCommentId).then(() => {
			window.location.reload(true);
		});
	};

	return isError ? null : isLoading ? (
		<p className="loading-display">Loading comments!</p>
	) : (
		<>
			<section className="article-comments">
				<h2>Comments</h2>

				{allComments.length === 0 ? (
					<p>There are no comments on this article</p>
				) : (
					<p>Total comments: {allComments.length}</p>
				)}

				<form onSubmit={handleSubmit}>
					<label className="comment-area">
						Post a comment: <br />
						<textarea
							className="comment-area"
							name="body"
							maxLength={180}
							onChange={handleChange}
							value={inputComment}
							required
						></textarea>
					</label>
					<br />
					{isCommentError ? (
						<p>There has been an error, please try again!</p>
					) : null}
					{isPosted ? (
						<p>Posting!</p>
					) : (
						<button className="comment-button" type="submit">
							Add comment
						</button>
					)}
				</form>
				{allComments.map((comment) => {
					return (
						<CommentsCard
							comment={comment}
							handleDelete={handleDelete}
							key={comment.comment_id}
						/>
					);
				})}
			</section>
		</>
	);
};
