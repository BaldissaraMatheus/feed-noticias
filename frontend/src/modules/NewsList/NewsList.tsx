import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { News as NewsModel } from '../../models/News';
import { News } from '../../components/News/News';
import './NewsList.css';

const newsList: NewsModel[]  = [
	{ id: '1', title: 'Notícia', content: 'Conteúdo', createdAt: new Date() },
	{ id: '2', title: 'Notícia', content: 'Conteúdo', createdAt: new Date() },
]

export const NewsList: React.FunctionComponent = () => {
	return (
		<main className="container">
			<div className="news-list">
				{ newsList.map(news => (
					<div key={news.id} className="news__item">
						<Link to={`/news/${news.id}`} key={news.id} className="news__item-link">
							<News news={news} />
						</Link>
					</div>
				)) }
			</div>
		</main>
	);
}
 

