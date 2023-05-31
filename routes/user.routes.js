const { Router } = require("express");
const { userControllers } = require("../controllers/user.controllers");
const router = Router();

router.get("/user", userControllers.getUser); /// Показать автора
router.post("/user", userControllers.addUser); /// Созать автора
router.delete("/user/:id", userControllers.deleteUser); /// Удалить автора


module.exports = router;