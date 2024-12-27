import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        {
            id: 1,
            title: "Book 1",
            author: "Author 1",
        },
        {
            id: 2,
            title: "Book 2",
            author: "Author 2",
        },
    ],
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        editBook: (state, action) => {
            const { id, title, author } = action.payload;
            const existingBook = state.books.find((book) => book.id === id);
            if (existingBook) {
                existingBook.title = title;
                existingBook.author = author;
            }
        },
    },
});

export const { deleteBook, addBook, editBook } = bookSlice.actions;

export default bookSlice.reducer;
