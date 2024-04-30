import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Inputs from '../add-book/Inputs';
import { useDispatch } from 'react-redux';
import { updateBooks } from '../../state-menagement/book-stats/BookSlice';

const EDIT_BOOK = () => {
  const location = useLocation();
  const [id,setId] = useState(location.state.id)
  const [title,setTitle] = useState(location.state.title)
  const [author, setAuthor] = useState(location.state.author)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleUpdateSubmit = (e) => {
    e.preventDefault()
    dispatch(updateBooks({ id, title, author }));
    navigate("/viewbook");
  }
  return (
    <>
      <form onSubmit={handleUpdateSubmit}>
        <Inputs value={title} setValue={setTitle} title="Title :" styles='mt-3' />
        <br />
        <Inputs value={author} setValue={setAuthor} title="Author :" styles='mt-3' />
        <br />
        <button
          
          className='bg-lime-500 text-white px-4 py-2 rounded-xl w-full mt-3'
        >Save</button>
      </form>
    </>
  )
}

export default EDIT_BOOK
