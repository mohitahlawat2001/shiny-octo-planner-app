import React, { useState, useEffect } from 'react';
import '../styles/NewsWidget.css';

const NewsWidget = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=57256a33a893442bbc410a3a4ce3f3b7';

        const response = await fetch(url);
        const data = await response.json();

        setNews(data.articles);
      } catch (error) {
        console.error('Failed to fetch news data:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-widget">
      <h2>Top Headlines</h2>
      {news.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {news.map((item) => (
            <li key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <p>{item.description}</p>
              <div className='img-container'>
              <img src={item.urlToImage} alt={item.title} />
            </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsWidget;
