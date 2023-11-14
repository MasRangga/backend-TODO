const { todos } = require("../models");

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      const todoList = await todos.findAll();

      res.status(200).json({
        message: "Berhasil mengambil semua todo",
        data: todoList,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengambil data todo",
        error: error.message,
      });
    }
  },

  getTodoById: async (req, res) => {
    try {
      const todoId = req.params.id;
      const todo = await todos.findByPk(todoId);

      if (todo) {
        res.status(200).json({
          message: "Berhasil mengambil todo berdasarkan ID",
          data: todo,
        });
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
    const todoData = req.body;

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

      await todo.update({
        value: req.body.value,
        user_id: req.body.user_id,
      });

      res.status(200).json({
        message: "Todo berhasil diupdate",
        data: todo,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Gagal mengupdate todo",
        error: error.message,
      });
    }
  },

  deleteAllTodo: async (req, res) => {
    try {
      await todos.destroy({ where: {} });
      res.status(200).json({
        message: "Semua todo berhasil dihapus",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Gagal menghapus semua todo",
        error: error.message,
      });
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
      res.status(200).json({
        message: "Todo berhasil dihapus",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Gagal menghapus todo",
        error: error.message,
      });
    }
  },
};
