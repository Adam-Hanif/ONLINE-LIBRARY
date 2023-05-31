const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  mail: String,
  isBlocked: {
    type: Boolean,
    default: false,
  },
  rentedBooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
