import React, { useState } from 'react'
import axios from 'axios'
import 'boxicons'
import '../styles/BookWidget.css'

const BookWidget = () => {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (query.trim() === '') return

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      )
      setBooks(response.data.items || [])
      setQuery('')
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  }

  const copyToClipboard = (isbn) => {
    navigator.clipboard
      .writeText(isbn)
      .then(() => {
        alert('ISBN 13 copied to clipboard!')
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
      })
  }

  return (
    <div className='book-widget'>
      <form onSubmit={handleSearch} className='book-form'>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search for books by title'
          className='book-input'
        />
        <button className='book-button' type='submit'>
          Search
        </button>
      </form>
      <div className='book-results-container'>
        {books.map((book) => {
          const isbn13 =
            book.volumeInfo.industryIdentifiers?.find(
              (identifier) => identifier.type === 'ISBN_13'
            )?.identifier || 'No ISBN_13 available'
          return (
            <div key={book.id} className='book-results'>
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors?.join(', ')}</p>
              <p>{book.volumeInfo.publishedDate}</p>
              <div className='book-isbn-container'>
                <p>ISBN 13: {isbn13}</p>
                <button
                  className='book-button-copy'
                  onClick={() => copyToClipboard(isbn13)}
                >
                  <box-icon color='white' name='copy' />
                </button>
              </div>
              <hr />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BookWidget
