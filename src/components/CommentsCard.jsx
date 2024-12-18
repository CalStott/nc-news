export const CommentsCard = ({ comment }) => {
	const { author, body, created_at, votes } = comment;
	const commentDate = created_at.slice(0, 10).split('-').reverse().join('-');
	const commentTime = created_at.slice(11, 16);

	return (
		<div className="task">
			<div className="tags">
				<span className="tag">{author}</span>
			</div>
			<p>{body}</p>
			<div className="stats">
				<div>
					Posted: {commentTime}, {commentDate}
				</div>
				<div>Votes: {votes}</div>
			</div>
		</div>
	);
};
