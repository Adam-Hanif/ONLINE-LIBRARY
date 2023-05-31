const { Router } = require("express");
const { bookController } = require("../controllers/book.controllers");
const router = Router();

router.get("/admin/book", bookController.getBook); /// Показать книги
router.post("/admin/book", bookController.addBook); ///добавление книги
router.delete("/admin/book/:id", bookController.deleteBook); /// Удалить книгу
router.patch("/admin/book/:id", bookController.patchBook); /// Изменить книгу
router.patch("/admin/book/rent/:id", bookController.rentBook); /// выдать книгу
router.get("/admin/book/:id", bookController.getBookById); /// Показать книгу
router.get("/admin/book/genre/:id", bookController.getBookByGenre); /// Показать книгу по жанру
router.patch("/books_return/:id", bookController.returnBook); ///возвращает книгу
router.patch("/admin/books-take/:id", bookController.takeBook); // отбирает книу и заблокировать 
module.exports = router;
