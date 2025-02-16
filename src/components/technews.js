import React, { useState, useEffect } from "react";
import "./NewsFeed.css";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [prevPages, setPrevPages] = useState([]);

  const API_KEY = "pub_66873f7ab8d98be881cdbea55344501b995eb";
  const BASE_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=tech%20industry`;

  const fetchNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "error") {
        console.error("API Error:", data.message);
        setLoading(false);
        return;
      }

      const sortedNews = data.results.sort(
        (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
      );

      setNews(sortedNews || []);
      setNextPage(data.nextPage || null);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(BASE_URL);
  }, []);

  const nextPageHandler = () => {
    if (nextPage) {
      setPrevPages([...prevPages, nextPage]);
      fetchNews(`${BASE_URL}&page=${nextPage}`);
    }
  };

  const prevPageHandler = () => {
    if (prevPages.length > 0) {
      const lastPage = prevPages.pop();
      setPrevPages([...prevPages]);
      fetchNews(`${BASE_URL}&page=${lastPage}`);
    }
  };

  if (loading) {
    return <div className="loading">Loading News...</div>;
  }

  if (!news.length) {
    return <div className="no-news">No news available at the moment.</div>;
  }

  return (
    <div className="news-feed">
      <header className="news-header">
        <h1>Tech Industry News</h1>
      </header>

      {/* Breaking News Section */}
      <div className="breaking-news">
        <h2 className="section-title">Breaking News</h2>
        <div className="news-grid">
          {news.slice(0, 6).map((article, index) => (
            <div key={index} className="news-card">
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="news-image"
                />
              )}
              <h3 className="news-title">{article.title}</h3>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="news-link">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Latest News Section */}
      <div className="latest-news">
        <h2 className="section-title">Latest Updates</h2>
        {news.slice(4).map((article, index) => (
          <div key={index} className="news-item">
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                className="news-image-small"
              />
            )}
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-description">{article.description}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="news-link">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={prevPageHandler} disabled={prevPages.length === 0} className="page-button">
          ← Previous
        </button>
        <button onClick={nextPageHandler} disabled={!nextPage} className="page-button">
          Next →
        </button>
      </div>
    </div>
  );
};

export default NewsFeed;
