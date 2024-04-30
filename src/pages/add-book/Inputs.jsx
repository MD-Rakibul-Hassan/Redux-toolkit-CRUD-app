

import React from 'react'

const Inputs = ({ title, setValue, value, styles, placeholder }) => {
	return (
		<>
			<label htmlFor={title} className="font-bold text-xl mx-4">
				{title}
			</label>
			<br />
			<input
				type="text"
				name={title}
				id={title}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className={`h-14 border-0 rounded-xl px-5 bg-slate-200 ${styles}`}
				placeholder={placeholder}
			/>
		</>
	);
};

export default Inputs
