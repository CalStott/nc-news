import './App.css';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Routes, Route } from 'react-router';
import { ArticleList } from './components/ArticleList.jsx';

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<ArticleList />}></Route>
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
