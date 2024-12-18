import { useState } from 'react';
import { patchArticleVotes } from '../api';

export const ArticleVoting = ({ article_id, votes }) => {
	const [voteValue, setVoteValue] = useState(0);
	const [isError, setIsError] = useState(false);

	const handleClick = (vote) => {
		setIsError(false);
		setVoteValue((currVoteValue) => currVoteValue + vote);

		patchArticleVotes(article_id, vote).catch((err) => {
			setIsError(true);
			setVoteValue((currVoteValue) => currVoteValue - vote);
		});
	};

	return (
		<div className="article-voting">
			<p>Votes: {votes + voteValue}</p>
			<button onClick={() => handleClick(1)}>⬆️</button>
			<button onClick={() => handleClick(-1)}>⬇️</button>
			{isError ? <p>You are offline, cannot currently update votes!</p> : null}
		</div>
	);
};
