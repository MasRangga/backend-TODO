const { User, todos } = require("../models");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.findAll({ include: todos });

      res.json({
        message: "Berhasil mengambil semua pengguna",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengambil data pengguna",
        error: error.message,
      });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId, { include: todos });

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          message: "Pengguna tidak ditemukan",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengambil data pengguna",
        error: error.message,
      });
    }
  },

  editUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedUserData = req.body;

      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({
          message: "Pengguna tidak ditemukan",
        });
      }

      await user.update(updatedUserData);
      const updatedUser = await User.findByPk(userId, { include: todos });

      res.status(200).json({
        message: "Pengguna berhasil diupdate",
        user: updatedUser,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengupdate pengguna",
        error: error.message,
      });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({
          message: "Pengguna tidak ditemukan",
        });
      }

      await user.destroy();

      res.status(200).json({
        message: "Pengguna berhasil dihapus",
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal menghapus pengguna",
        error: error.message,
      });
    }
  },
};
