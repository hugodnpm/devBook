import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { Search } from './pages/Search'
import { Books } from './pages/Books/Books'
import { BookDetail } from './pages/BookDetail/BookDetail'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
