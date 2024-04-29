import React from 'react'
import { useSelector } from 'react-redux'

const VIEW_BOOK = () => {
  const books = useSelector((state) => state.booksReducer.books);
  return (
		<div className='my-10'>
			<table class="border-collapse border border-slate-400 ...">
				<thead>
					<tr>
						<th class="border border-slate-300 ...">ID</th>
						<th class="border border-slate-300 ...">Title</th>
						<th class="border border-slate-300 ...">Author</th>
						<th class="border border-slate-300 ...">Action</th>
					</tr>
				</thead>
				<tbody>
          {
            books && books.map((book) => {
              const {id,author,title} = book
              return (
                <tr key={id}>
                  <td className='border-2 p-4 border-state-300'>{id}</td>
                  <td className='border-2 p-4 border-state-300'>{author}</td>
                  <td className='border-2 p-4 border-state-300'>{title}</td>
                  <td className='border-2 border-state-300'>
                    <button className='bg-lime-500 mx-2 text-white px-4 py-2 rounded-xl'>Edit</button>
                    <button className='bg-orange-600 mx-2 text-white px-4 py-2 rounded-xl'>Delete</button>
                  </td>
                </tr>
              )
            })
          }
				</tbody>
			</table>
		</div>
	);
}

export default VIEW_BOOK
