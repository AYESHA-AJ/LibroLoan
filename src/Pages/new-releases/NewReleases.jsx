import React from 'react'
import { getAllBooks } from '../../data/books'
import BookCard from '../books/BookCard';

const NewReleases = () => {
    const data = getAllBooks();
    //based on released date 
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const sevenDaysAgo = today.getTime() - (7 * oneDay);
    const latestBooks = data.filter(book => {
        const bookCreatedDate = new Date(book.createdAt).getTime();
        return bookCreatedDate >= sevenDaysAgo
    })
  return (
    <div className='grid sm:grid-cols-2 xl-grid-cols-4 gap-7 lg:grid-cols-3'>
    {
        latestBooks.map((book, i) => (book?.upcoming ?"":<BookCard key={i} book={book} />))
        
}
</div>
  )
}

export default NewReleases
