export const ArticleCard = ({ article }) => {
	const { title, author, article_img_url } = article;

	return (
		<div className="article-card">
			<div>
				<h2>{title}</h2>
				<p>{author}</p>
				<div className="article-card-img">
					<img width="250px" height="150px" src={article_img_url} alt={title} />
				</div>
			</div>
		</div>
	);
};
