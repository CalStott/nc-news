import axios from 'axios';

const ncNews = axios.create({
	baseURL: 'https://calebs-backend-news-project.onrender.com/api',
});

const getArticles = () => {
	return ncNews
		.get('/articles')
		.then(({ data: { articles } }) => {
			return articles;
		})
		.catch((err) => {
			console.log(err, '<-- err in getArticles');
		});
};

export { getArticles };
