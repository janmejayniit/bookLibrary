import React,{useContext, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { BooksContext } from '../BooksContext.jsx';

const Books = () => {

    const query = new URLSearchParams(useLocation().search);
    const search = query.get('search') || '';
    const { books } = useContext(BooksContext);   

    const filterBooks = books.filter(b => b.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {filterBooks.map(book => (
                    <li key={book.id}>
                        {book.title} by {book.author}
                    </li>
                ))}
            </ul>
            
        </div>
    )
}
export default Books;