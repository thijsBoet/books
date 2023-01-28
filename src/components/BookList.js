import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

const useBooksContext = () => useContext(BooksContext);

const BookList = () => {
	const { books } = useBooksContext();

	const renderedBooks = books.map(book => <BookShow key={book.id} book={book} />);

	return <div className='book-list'>{renderedBooks}</div>;
};

export default BookList;
