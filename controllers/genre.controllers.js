const Genre = require("../models/Genre");
module.exports.genreControllers = {
  addGenre: async (req, res) => {
    try {
      const { genreName } = req.body;
      const genre = await Genre.create({
        genreName,
      });
      res.json(genre);
    } catch (error) {
      res.json({ error: "Ошибка при добавление жанра" });
    }
  },
  deleteGenre: async (req, res) => {
    try {
      const genre = await Genre.findByIdAndRemove(req.params.id);
      res.json(genre);
    } catch (error) {
      res.json({ error: "Ошибка при удаление жанра" });
    }
  },
  getGenre: async (req, res) => {
    try {
      const genre = await Genre.find({});
      res.json(genre);
    } catch (error) {
      res.json({ error: "Ошибка при показе всех жанр" });
    }
  },
  patchGenre: async (req, res) => {
    try {
      const genre = await Genre.findByIdAndRemove(req.params.id);
      res.json(genre);
    } catch (error) {
      res.json({ error: "Ошибка при изменение" });
    }
  },
};
