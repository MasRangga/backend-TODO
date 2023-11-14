const { todos } = require("../models");

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      const todoList = await todos.findAll(); // Revisi: Ganti nama variabel agar lebih deskriptif
      console.log(todoList);

      res.status(200).json(todoList);
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengambil data todo",
        error: error.message,
      });
    }
  },

  getTodoById: async (req, res) => {
    try {
      const todoId = req.params.id; // Revisi: Ganti nama variabel agar lebih deskriptif
      const todo = await todos.findByPk(todoId);

      if (todo) {
        res.status(200).json(todo);
      } else {
        res.status(404).json({
          message: "Todo tidak ditemukan",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengambil data todo",
        error: error.message,
      });
    }
  },

  createTodo: async (req, res) => {
    const todoData = req.body; // Revisi: Ganti nama variabel agar lebih deskriptif

    try {
      await todos.create(todoData);

      res.status(201).json({
        message: "Berhasil menambahkan todo",
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal menambahkan todo",
        error: error.message,
      });
    }
  },

  editTodoById: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const todo = await todos.findByPk(id);

      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      // Revisi: Menunggu pembaruan data selesai sebelum melanjutkan
      await todo.update({
        value: req.body.value,
        user_id: req.body.user_id,
      });

      res.status(200).json({ message: "Todo berhasil diupdate" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  deleteAllTodo: async (req, res) => {
    try {
      await todos.destroy({ where: {} });
      res.status(200).json({ message: "Semua todo berhasil dihapus" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  deleteTodoById: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const todo = await todos.findByPk(id);

      if (!todo) {
        return res.status(404).json({ message: "Todo tidak ditemukan" });
      }

      await todo.destroy();
      res.status(200).json({ message: "Todo berhasil dihapus" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
