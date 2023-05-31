const User = require("../models/User.model");
module.exports.userControllers = {
  addUser: async (req, res) => {
    try {
      const { name, mail, IsBlocked, rentedBook } = req.body;
      const user = await User.create({
        name,
        mail,
        IsBlocked,
        rentedBook,
      });
      res.json(user);
    } catch (error) {
      res.json({ error: "Ошибка при добавление User" });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.json({ error: "Ошибка при показе всех User" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const author = await User.findByIdAndRemove(req.params.id);
      res.json(author);
    } catch (error) {
      res.json({ error: "Ошибка при удаление автора" });
    }
  },
};
