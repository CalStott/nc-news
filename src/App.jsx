import './App.css';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Routes, Route } from 'react-router';
import { ArticleList } from './components/ArticleList.jsx';
import { SingleArticle } from './components/SingleArticle.jsx';
import { TopicList } from './components/TopicList.jsx';

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<ArticleList />}></Route>
					<Route
						path="/articles/:article_id"
						element={<SingleArticle />}
					></Route>
					<Route path="/topics" element={<TopicList />}></Route>
					<Route path="/topics/:topic" element={<ArticleList />}></Route>
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
