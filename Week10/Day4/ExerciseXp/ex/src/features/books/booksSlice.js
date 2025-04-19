import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: "Dracula", author: "Bram Stoker", genre: "horror" },
  { id: 2, title: "Frankenstein", author: "Mary Shelley", genre: "horror" },
  { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "fantasy" },
  { id: 4, title: "Dune", author: "Frank Herbert", genre: "science fiction" },
  { id: 5, title: "Neuromancer", author: "William Gibson", genre: "science fiction" },
  { id: 6, title: "Harry Potter", author: "J.K. Rowling", genre: "fantasy" }
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
   
  }
});

export default booksSlice.reducer;