import axios from 'axios';

const ncNews = axios.create({
	baseURL: 'https://calebs-backend-news-project.onrender.com/api',
});

const getArticles = (topic, sort_by, order) => {
	return ncNews
		.get('/articles', { params: { topic, sort_by, order } })
		.then(({ data: { articles } }) => articles);
};

const getArticleById = (article_id) => {
	return ncNews
		.get(`/articles/${article_id}`)
		.then(({ data: { article } }) => article);
};

const getCommentsByArticleId = (article_id) => {
	return ncNews
		.get(`/articles/${article_id}/comments`)
		.then(({ data: { comments } }) => comments);
};

const patchArticleVotes = (article_id, votes) => {
	return ncNews
		.patch(`/articles/${article_id}`, { inc_votes: votes })
		.then(({ data: { article } }) => {
			return article;
		});
};

const postCommentOnArticle = (article_id, body) => {
	return ncNews
		.post(`/articles/${article_id}/comments`, {
			username: 'cooljmessy',
			body,
		})
		.then(({ data: { comment } }) => {
			return comment;
		});
};

const deleteCommentById = (comment_id) => {
	return ncNews.delete(`/comments/${comment_id}`);
};

const getTopics = () => {
	return ncNews.get('/topics').then(({ data: { topics } }) => {
		return topics;
	});
};

export {
	getArticles,
	getArticleById,
	getCommentsByArticleId,
	patchArticleVotes,
	postCommentOnArticle,
	deleteCommentById,
	getTopics,
};
