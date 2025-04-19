import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks
} from '../features/books/booksSelector.js';

const BookList = () => {
  const [genre, setGenre] = useState('all');

  // Выбираем книги по жанру
  const books = useSelector((state) => {
    switch (genre) {
      case 'horror':
        return selectHorrorBooks(state);
      case 'fantasy':
        return selectFantasyBooks(state);
      case 'science fiction':
        return selectScienceFictionBooks(state);
      default:
        return selectBooks(state);
    }
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>📚 Book Inventory</h2>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setGenre('all')}>All</button>
        <button onClick={() => setGenre('horror')}>Horror</button>
        <button onClick={() => setGenre('fantasy')}>Fantasy</button>
        <button onClick={() => setGenre('science fiction')}>Science Fiction</button>
      </div>

      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} [{book.genre}]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;