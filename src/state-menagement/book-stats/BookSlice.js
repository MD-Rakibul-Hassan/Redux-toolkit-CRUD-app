
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
        },
        updateBooks: (state, action) => {
            const { id, title, author } = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id);
            if (isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author = author
            }
        }
	},
});
export const { showBooks,addBooks,deleteBooks,updateBooks } = bookSlice.actions;
export default bookSlice.reducer;
