import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getArticleById } from '../api';
import { ArticleContent } from './ArticleContent';
import { CommentsList } from './CommentsList';

export const SingleArticle = () => {
	const { article_id } = useParams();

	return (
		<>
			<ArticleContent article_id={article_id} />
			<CommentsList article_id={article_id} />
		</>
	);
};
