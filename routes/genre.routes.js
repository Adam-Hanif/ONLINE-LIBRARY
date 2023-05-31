const { Router } = require("express");
const { genreControllers } = require("../controllers/genre.controllers");
const router = Router();

router.get("/admin/genre", genreControllers.getGenre); /// показать всех жанр
router.post("/admin/genre", genreControllers.addGenre); /// создать жанр
router.delete("/admin/genre/:id", genreControllers.deleteGenre); /// Удалить жанр
router.patch("/admin/genre", genreControllers.patchGenre);
module.exports = router;
