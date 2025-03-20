const db=require('../config/db.js');

const tableName = "books";

const getAllBooks = () => {
  return db.select("*").from(tableName);
};

const getBookById = (id) => {
  return db(tableName).where({ id }).first();
};

const createBook = (book) => {
  const { title, author, publishedYear } = book;
  return db(tableName).insert({ title, author, publishedYear }).returning("*");
};

const updateBook = (id, book) => {
  return db(tableName).where({ id }).update(book).returning("*");
};

const deleteBook = (id) => {
  return db(tableName).where({ id }).del().returning("*");
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
