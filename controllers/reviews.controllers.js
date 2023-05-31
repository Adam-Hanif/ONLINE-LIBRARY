const Reviews = require("../models/Reviews");
module.exports.reviewController = {
  addReview: async (req, res) => {
    try {
      const { text, bookId, userId } = req.body;
      const bookReview = await Reviews.create({
        text,
        bookId,
        userId,
      });
      res.json(bookReview);
    } catch (error) {
      res.json({ error: "Ошибка при добавление" });
    }
  },
  deleteReview: async (req, res) => {
    try {
      const Review = await Reviews.findByIdAndRemove(req.params.id);
      res.json(Review);
    } catch (error) {
      res.json({ error: "Ошибка при удаление" });
    }
  },
  getReviewByBook: async (req, res) => {
    try {
      const bookReview = await Reviews.find({
        bookId: req.params.id,
      });
      res.json(bookReview);
    } catch (error) {
      res.json({ error: "Ошибка вывод рецензий  к определенной книге" });
    }
  },
};
