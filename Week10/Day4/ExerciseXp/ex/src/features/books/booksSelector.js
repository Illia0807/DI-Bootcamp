
import { createSelector } from '@reduxjs/toolkit';


export const selectBooks = (state) => Array.isArray(state.books) ? state.books : [];

export const selectHorrorBooks = createSelector(
  [selectBooks],
  (books) => books.filter(book => book.genre === 'horror')
);


export const selectFantasyBooks = createSelector(
  [selectBooks],
  (books) => books.filter(book => book.genre === 'fantasy')
);


export const selectScienceFictionBooks = createSelector(
        [selectBooks],
        (books) => books.filter(book => book.genre.toLowerCase() === 'science fiction')
);