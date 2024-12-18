import { Link } from 'react-router';

export const ArticleCard = ({ article }) => {
	const { article_id, title, author, article_img_url, created_at } = article;
	const articleDate = created_at.slice(0, 10).split('-').reverse().join('-');

	return (
		<div className="article-card">
			<div>
				<Link to={{ pathname: `/articles/${article_id}` }}>
					<h2>{title}</h2>
				</Link>
				<p>{author}</p>
				<div className="article-card-img">
					<img width="250px" height="150px" src={article_img_url} alt={title} />
				</div>
				<footer>{articleDate}</footer>
			</div>
		</div>
	);
};
