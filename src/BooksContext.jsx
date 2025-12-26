import React,{useState, useEffect, createContext} from  'react';
export const BooksContext = createContext();

export const BooksProvider = ({children})=>{

    const [books, setBooks] = useState([]);
    useEffect(()=>{
        // Fetch books data from an API or local source
        fetch('/books.json')
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => console.error('Error fetching books:', error));
    },[])

    return(
        <BooksContext.Provider value={{books, setBooks}}>
            {children}
        </BooksContext.Provider>
    )
}