const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  text: String,
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Reviews = mongoose.model("Reviews", reviewsSchema);
module.exports = Reviews;
