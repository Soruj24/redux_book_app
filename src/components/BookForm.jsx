import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addBook, editBook } from '../features/books/bookSlice';

const BookForm = ({ bookToEdit }) => {
    const [formData, setFormData] = useState({ title: '', author: '' });
    const dispatch = useDispatch();

    // Populate form when editing a book
    useEffect(() => {
        if (bookToEdit) {
            setFormData({
                title: bookToEdit.title || '',
                author: bookToEdit.author || '',
            });
        }
    }, [bookToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookToEdit) {
            // Dispatch edit action
            dispatch(editBook({ ...formData, id: bookToEdit.id }));
        } else {
            // Dispatch add action
            dispatch(addBook({ ...formData, id: nanoid() }));
        }
        setFormData({ title: '', author: '' }); // Reset form
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-center mb-4">
                {bookToEdit ? 'Edit Book' : 'Add New Book'}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Book Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md p-4 border-gray-300"
                        placeholder="Enter book title"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="author"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Author Name
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm"
                        placeholder="Enter author name"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    {bookToEdit ? 'Update Book' : 'Add Book'}
                </button>
            </form>
        </div>
    );
};

export default BookForm;
