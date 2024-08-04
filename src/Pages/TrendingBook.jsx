import React from 'react'
import { getAllBooks } from '../data/books'
import BookCard from './books/BookCard';

const TrendingBook = () => {
    const books = getAllBooks();
    const trendingBooks = books.sort((a, b) => b.rating-a.rating)
    return (
    <div className='grid sm:grid-cols-2 xl-grid-cols-4 gap-7 lg:grid-cols-3'>
            {
                trendingBooks.map((book, i) => (<BookCard key={i} book={book} />))
                
      }
    </div>
  )
}

export default TrendingBook
