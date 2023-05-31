const Book = require("../models/book");
const User = require("../models/User.model");

module.exports.bookController = {
  //-----------------------------------------------------------------------------
  addBook: async (req, res) => {
    try {
      const { name, author, genreId, userId } = req.body;
      const book = await Book.create({
        name,
        author,
        genreId,
        userId,
      });
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка при добавление" });
    }
  },
  //-----------------------------------------------------------------------------
  deleteBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndRemove(req.params.id);
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка при удаление" });
    }
  },
  //-----------------------------------------------------------------------------
  patchBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body);
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка при изменение" });
    }
  },
  //-----------------------------------------------------------------------------
  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("genreId");
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка при показе книг" });
    }
  },
  //-----------------------------------------------------------------------------
  getBook: async (req, res) => {
    try {
      const book = await Book.find().populate("genreId");
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка при показе всех книг" });
    }
  },
  //-----------------------------------------------------------------------------
  getBookByGenre: async (req, res) => {
    try {
      const book = await Book.find({ genreId: req.params.id });
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка вывод книги по жанру" });
    }
  },
  //-----------------------------------------------------------------------------
  rentBook: async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    const book = await Book.findById(id);
    const user = await User.findById(userId);

    if (user.isBlocked) {
      return res.json("вы заблокированы");
    }
    if (book.userId) {
      return res.json("эта книга уже арендована другим пользователем");
    }

    if (user.rentedBooks.length >= 3) {
      return res.json("нельзя арендовать больше 3-х книг одновременно");
    }
    await Book.findByIdAndUpdate(id, {
      userId,
    });
    await User.findByIdAndUpdate(userId, {
      $push: {
        rentedBooks: id,
      },
    });
    res.json("rented");
  },
  //-----------------------------------------------------------------------------
  // blockUser: async (req, res) => {
  //   const { userId } = req.params;
  //   const { bookId } = req.body;
  //   await User.findByIdAndUpdate(userId, {
  //     isBlocked: true,
  //     rentBooks: [],
  //   });
  //   await Book.findByIdAndUpdate(bookId, {
  //     userId: null,
  //   });

  //   res.json("Blocked");
  // },
  //----------------------------------------------------------------------------------------

  returnBook: async (req, res) => {
    await Book.findByIdAndUpdate(req.params.id, { $set: { userId: null } });
    await User.findByIdAndUpdate(req.body.userId, {
      $pull: { rentedBooks: req.params.id },
    });

    res.json("Return");
  },
  //-------------------------------------------------------------------------------
  takeBook: async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {
      $set: { rentedBooks: [], isBlocked: true },
    });
    await Book.updateMany(
      { userId: req.params.id },
      { $set: { userId: null } }
    );
    res.json("Return");
  },
};
