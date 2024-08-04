import React from 'react'
import { getAllBooks } from '../data/books'
import BookCard from './books/BookCard'

const UpcomingBooks = () => {
    const books = getAllBooks()
    const UpcomingBooks = books.filter(book => book?.upcoming === true);
  return (
    <div className='content '>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {
                  UpcomingBooks.map((book, index) => (
                      <BookCard key={index} book={book} />
                  ))
              }
      </div>
    </div>
  )
}

export default UpcomingBooks
