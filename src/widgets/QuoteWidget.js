import React, { useEffect, useState } from 'react'
import '../styles/QuoteWidget.css'

const QuoteWidget = () => {
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    fetchQuote()
  }, [])

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://dummyjson.com/quotes/random')
      const data = await response.json()
      setQuote(data)
    } catch (error) {
      console.log('Error fetching quote:', error)
    }
  }

  return (
    <div className='quote-widget'>
      {quote && (
        <div className='quote-container'>
          <h2 className='quote-content'>{quote.quote}</h2>
          <p className='quote-author'>&mdash; {quote.author}</p>
        </div>
      )}
      <button className='quote-button' onClick={fetchQuote}>
        Get New Quote
      </button>
    </div>
  )
}

export default QuoteWidget
