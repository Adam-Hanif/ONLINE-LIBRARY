const { Router } = require("express");
const { reviewController } = require("../controllers/reviews.controllers");
const router = Router();

router.get("/review/book/:id", reviewController.getReviewByBook); ///  вывод всех рецензий к определенной книге
router.post("/review", reviewController.addReview); /// Созать рецензию
router.delete("/review/:id", reviewController.deleteReview); /// Удалить рецензию

module.exports = router;
