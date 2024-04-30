import React, { useState } from 'react'
import Inputs from './Inputs';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from '../../state-menagement/book-stats/BookSlice';
import { useNavigate } from 'react-router-dom';

const ADD_BOOK = () => {
  	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const numberOfBooks = useSelector((state) => state.booksReducer.books);
	const dispatch = useDispatch();
	const navigate = useNavigate()
	
	const handleBookSubmit = (e) => {
		e.preventDefault();
		const book = { id: numberOfBooks.length + 1, title, author };
		dispatch(addBooks(book));
		navigate("/viewbook");
	}
  return (
		<div>
			<form onSubmit={handleBookSubmit}>
				<Inputs
					title="Title"
					value={title}
					setValue={setTitle}
					styles="mt-2"
					placeholder="Book Title"
				/>
				<br />
				<Inputs
					title="Author"
					value={author}
					setValue={setAuthor}
					styles="mt-2"
					placeholder="Book Author"
				/>
				<br />
				<button className="bg-lime-500 text-white px-4 py-2 rounded-xl w-full my-3">
					ADD-BOOK
				</button>
			</form>
		</div>
	);
}

export default ADD_BOOK
