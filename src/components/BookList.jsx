import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../features/books/bookSlice';

const BookList = ({ onHandelEdit }) => {
    const { books } = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    };

    const handleUpdate = (book) => {
        onHandelEdit(book)
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">List of Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {books && books.length > 0 ? (
                    books.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
                            <p className="text-gray-600 mt-2">by {book.author}</p>
                            <div className="flex justify-end space-x-4 mt-4">
                                <button
                                    onClick={() => handleUpdate(book)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(book.id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No Book Found</p>
                )}
            </div>
        </div>
    );
};

export default BookList;
