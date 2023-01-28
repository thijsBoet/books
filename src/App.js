import { useState, useEffect } from 'react';


import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

import axios from 'axios';

import { BASE_URL } from './constants';

function App() {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const response = await axios.get(`${BASE_URL}/books`);

		setBooks(response.data);
	};

	useEffect(() => {
		fetchBooks();
	}, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.patch(`${BASE_URL}/books/${id}`, { title: newTitle });
    const updatedBooks = books.map(book => book.id === id && {...book, ...response.data});

    setBooks(updatedBooks);
	};

  const deleteBookById = async id => {
    await axios.delete(`${BASE_URL}/books/${id}`);
		const updatedBooks = books.filter(book => book.id !== id);

		setBooks(updatedBooks);
	};

	const createBook = async title => {
		const response = await axios.post(`${BASE_URL}/books`, { title });

		setBooks([...books, response.data]);
	};

	return (
		<div className='app'>
			<h1>Reading List</h1>
			<BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;
