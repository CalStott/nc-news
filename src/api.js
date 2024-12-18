import axios from 'axios';

const ncNews = axios.create({
	baseURL: 'https://calebs-backend-news-project.onrender.com/api',
});

const getArticles = () => {
	return ncNews.get('/articles').then(({ data: { articles } }) => articles);
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

export { getArticles, getArticleById, getCommentsByArticleId };
