import React, { useState, useEffect } from 'react'
import '../styles/NewsWidget.css'

const NewsWidget = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url =
          'https://newsdata.io/api/1/news?apikey=pub_25246012b74356fb025cdf50f3354a4f989ea&language=en'

        const response = await fetch(url)
        const data = await response.json()

        setNews(data.results)
      } catch (error) {
        console.error('Failed to fetch news data:', error)
      }
    }

    fetchNews()
  }, [])

  return (
    <div className='news-widget'>
      <h2>Top Headlines</h2>
      {news && news.length === 0
        ? (
          <p>Loading news...</p>
          )
        : (
          <ul>
            {news &&
            news.map((item) => (
              <li key={item.title}>
                <a href={item.link} target='_blank' rel='noopener noreferrer'>
                  {item.title}
                </a>
                <p>{item.description}</p>
                <p>{item.pubDate}</p>
                <p>{item.source}</p>
              </li>
            ))}
          </ul>
          )}
    </div>
  )
}

export default NewsWidget
