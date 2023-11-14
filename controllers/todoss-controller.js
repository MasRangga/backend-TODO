const { Todo } = require("../models");

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      // Mengambil semua data pengguna dari model Todo
      const Todos = await Todo.findAll();
      console.log(Todos);

      res.status(200).json(Todos);
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengambil data todo",
        error: error.message,
      });
    }
  },

  getTodoById: async (req, res) => {
    try {
      const TodoId = req.params.id; // Mengambil ID pengguna dari parameter permintaan

      // Mengambil pengguna berdasarkan ID
      const Todos = await Todo.findByPk(TodoId);

      if (Todos) {
        res.status(200).json(Todos);
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
    let data = req.body;

    try {
      await Todo.create(data);

      res.status(201).json({
        message: "Berhasil menambahkan todo",
      });
    } catch (error) {
      res.json({
        message: "Gagal menambahkan todo",
        error: error.message,
      });
    }
  },

  editTodoById: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const todo = await Todo.findByPk(id);

      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      // Update the todo's value
      todo.value = req.body.value;
      todo.user_id = req.body.user_id;
      await todo.save();

      // Set proper headers
      res.header("Content-Type", "application/json");
      res.status(200).json({ message: "Todo updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  deleteAllTodo: async (req, res) => {
    try {
      // Delete all todos
      await Todo.destroy({ where: {} });
      return res.status(200).json({ message: "All todos deleted" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  deleteTodoById: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const todo = await Todo.findByPk(id);

      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      await todo.destroy();
      return res.status(200).json({ message: "Todo deleted" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
