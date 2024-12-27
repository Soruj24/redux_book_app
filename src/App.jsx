
import { useState } from 'react';
import BookForm from './components/BookForm'
import BookList from './components/BookList'

function App() {
  const [bookToEdit, setBookToEdit] = useState(null);
  const handelEdit = (book) => {
    setBookToEdit(book)
  }

  return (
    <div>
      <BookForm bookToEdit={bookToEdit} />
      <BookList onHandelEdit={handelEdit} />
    </div>
  )
}

export default App
