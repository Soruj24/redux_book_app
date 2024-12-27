import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import bookSlice from '../features/books/bookSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        books: bookSlice
    },
})