import React, { useState } from 'react';
import { BookEdit } from './index';

const BookShow = ({ book, onDelete, onEdit }) => {
	const [showEdit, setShowEdit] = useState(false);

	const handleSubmit = (id, title) => {
		setShowEdit(false);
		onEdit(id, title);
	};

	const toggleShowEditForm = () => setShowEdit(!showEdit);

	let content = <h3>{book.title}</h3>;

	if (showEdit) {
		content = <BookEdit book={book} onSubmit={handleSubmit} />;
	}


	return (
		<div className='book-show'>
			<img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
			{content}
			<div className='actions'>
				<button className='edit' onClick={toggleShowEditForm}>
					Edit
				</button>
				<button className='delete' onClick={() => onDelete(book.id)}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default BookShow;
