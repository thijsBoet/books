import { useState } from 'react';

import { capitalize } from '../utils';

const BookCreate = ({ onCreate }) => {
	const [title, setTitle] = useState('');

	const handleChange = event => {
		const capitalizedTitle = capitalize(event.target.value);
		setTitle(capitalizedTitle);
	};

	const handleSubmit = event => {
		event.preventDefault();
		onCreate(title);
		setTitle('');
	};

	return (
		<div className='book-create'>
			<h3>Add a Book</h3>
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input className='input' value={title} onChange={handleChange} />
				<button className='button'>Create!</button>
			</form>
		</div>
	);
};

export default BookCreate;
