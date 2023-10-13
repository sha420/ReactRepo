// src/components/News.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function News() {
  const [articles, setArticles] = useState([]);
  const apiKey = '9ba318d102844ac09ef4a9bf4fe14555';

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          apiKey,
        }
      })
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  }, []);

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <div className="news-article" key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}

export default News;
