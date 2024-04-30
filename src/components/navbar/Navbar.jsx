import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
			<div className=" container mx-auto px-5 py-5 flex justify-between items-center bg-slate-500">
				<div>
					<h1 className='text-xl font-bold text-yellow-500'>BookView</h1>
				</div>
				<div>
					<ul className="flex gap-5">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "text-yellow-500" : "text-blue-100"
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/addbook"
								className={({ isActive }) =>
									isActive ? "text-yellow-500" : "text-blue-100"
								}
							>
								Add-Book
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/viewbook"
								className={({ isActive }) =>
									isActive ? "text-yellow-500" : "text-blue-100"
								}
							>
								View-Book
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					<button className='bg-yellow-500 px-4 py-2 rounded-xl text-white'>Login</button>
				</div>
			</div>
		);
}

export default Navbar
