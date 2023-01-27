import { useState } from 'react';

const BookEdit = ({ book, onSubmit }) => {
	const [title, setTitle] = useState(book.title);

	const handleSubmit = e => {
		e.preventDefault();

		onSubmit(book.id, title);
	};

	return (
		<form className='book-edit' onSubmit={e => handleSubmit(e)}>
			<label htmlFor='Title'>Title</label>
			<input
				type='text'
				className='input'
				name='title'
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<button className='button is-primary'>Save</button>
		</form>
	);
};

export default BookEdit;
