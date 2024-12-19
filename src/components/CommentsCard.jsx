export const CommentsCard = ({ comment, handleDelete }) => {
	const { comment_id, author, body, created_at, votes } = comment;
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
				{author === 'cooljmessy' ? (
					<button onClick={handleDelete} value={comment_id}>
						Delete comment 🚫
					</button>
				) : null}
				<div>Votes: {votes}</div>
			</div>
		</div>
	);
};
