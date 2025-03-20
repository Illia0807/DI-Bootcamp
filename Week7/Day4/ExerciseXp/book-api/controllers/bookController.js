const booksRepo = require("../models/bookModel.js");

getAllBooks = async (req, res) => {
        try {
            const books = await booksRepo.getAllBooks();
            res.json(books);
        } catch (err) {
            res.status(500).json({ message: "Error fetching books", error: err });
        }
    };

getBookById = async (req, res) => {
        try {
            const book = await booksRepo.getBookById(req.params.bookId);
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ message: "Book not found" });
            }
        } catch (err) {
            res.status(500).json({ message: "Error fetching book", error: err });
        }
    };

createBook = async (req, res) => {
        const { title, author, publishedYear } = req.body;

        // Просто проверяем поля и отправляем ошибку, если чего-то нет
        // if (!title || !author || !publishedYear) return res.status(400).json({ message: "Missing required fields" });
    
        try {
            // Вставляем книгу в базу и возвращаем результат
            const book = await booksRepo.createBook({ title, author, publishedYear });
            res.status(201).json(book);
        } catch (err) {
            // Логируем ошибку, если что-то пошло не так
            res.status(500).json({ message: "Error creating book", error: err.message });
        }
    };

updateBook = async (req, res) => {
        try {
            const { title, author, publishedYear } = req.body;
            const [updatedBook] = await booksRepo.updateBook(req.params.bookId, { title, author, publishedYear });
    
            if (updatedBook) {
                res.json(updatedBook);
            } else {
                res.status(404).json({ message: "Book not found" });
            }
        } catch (err) {
            res.status(500).json({ message: "Error updating book", error: err });
        }
    };

deleteBook = async (req, res) => {
        try {
            const [deletedBook] = await booksRepo.deleteBook(req.params.bookId);
            if (deletedBook) {
                res.json({ message: "Book deleted", book: deletedBook });
            } else {
                res.status(404).json({ message: "Book not found" });
            }
        } catch (err) {
            res.status(500).json({ message: "Error deleting book", error: err });
        }
    };
module.exports={
        getAllBooks,
        getBookById,
        createBook,
        updateBook,
        deleteBook

}