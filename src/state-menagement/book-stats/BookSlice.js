
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
            id:1
        },
    ]
}

const bookSlice = createSlice({
    name: 'books',
    initialState: initalBooks,
    reducers: {
        showBooks: (state) => state,
    }
})
export const { showBooks } = bookSlice.actions;
export default bookSlice.reducer;
