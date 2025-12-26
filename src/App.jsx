import { BooksProvider } from './BooksContext.jsx'
import Books from './components/Books.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import BookDetails from './components/BookDetails.jsx'
import NotFound from './components/NotFound.jsx'
import SecretBooks from './components/SecretBooks.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

function App() {
 

  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to="/" />} />
          <Route path="/books/:bookId" element={<BookDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/secret" element={<PrivateRoute Component={<SecretBooks/>}></PrivateRoute>}/>
        </Routes>
      </Router>
  
    </BooksProvider>
  )
}

export default App
