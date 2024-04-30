
import { createSlice } from "@reduxjs/toolkit";

const initalBooks = {
    books: [
        {
            author: 'Junied Ahamed',
            title: 'Hata Kaloma JS',
            id:1
        },
        {
            author: 'Mabbur Rahaman',
            title: 'Data Structor and Algorithom',
            id:2
        },
    ]
}

const bookSlice = createSlice({
	name: "books",
	initialState: initalBooks,
	reducers: {
		showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBooks: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
        }
	},
});
export const { showBooks,addBooks,deleteBooks } = bookSlice.actions;
export default bookSlice.reducer;
