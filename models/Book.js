const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  author: String,
  genreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
