import { useState, createContext } from 'react';
import axios from 'axios';

import { BASE_URL } from '../constants';

const BooksContext = createContext();

const Provider = ({ children }) => {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const response = await axios.get(`${BASE_URL}/books`);

		setBooks(response.data);
	};

	const editBookById = async (id, newTitle) => {
		const response = await axios.patch(`${BASE_URL}/books/${id}`, {
			title: newTitle,
		});
		const updatedBooks = books.map(
			book => book.id === id && { ...book, ...response.data }
		);

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

	const valueToShare = {
		books,
		fetchBooks,
		editBookById,
		deleteBookById,
		createBook,
	};

	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
};

export { Provider };
export default BooksContext;
