import { useState, useEffect } from 'react';
import { BookCreate, BookList } from './components';
import { generateRandomId } from './utils';
import { bookData } from './data';
import axios from 'axios';

const App = () => {
	const [books, setBooks] = useState(bookData);
	// useEffect(() => {
	// 	const response = axios.get('http://localhost:3001/books')
	// 	setBooks(response.data)
	// }, [books])
	


	const createBook = title => {
		const updatedBooks = [...books, { id: generateRandomId(), title }];
		setBooks(updatedBooks);
	};

	const editBookById = (id, title) => {
		const updatedBooks = books.map(book =>
			book.id === id ? { ...book, title } : book
		);
		setBooks(updatedBooks);
	};

	const deleteBookById = id => {
		const updatedBooks = books.filter(book => book.id !== id);
		setBooks(updatedBooks);
	};

	return (
		<div className='app'>
			<h1>Reading List</h1>
			<BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
			<BookCreate onCreate={createBook} />
		</div>
	);
};

export default App;
