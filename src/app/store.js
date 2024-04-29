import { configureStore } from "@reduxjs/toolkit";
import bookSlice from '../state-menagement/book-stats/BookSlice'

const store = configureStore({
	reducer: {
		booksReducer: bookSlice,
	},
});

export default store;