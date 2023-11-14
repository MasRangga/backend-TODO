const { User, todos } = require("../models");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      // Mengambil semua data pengguna dari model User
      const users = await User.findAll({ include: todos });

      res.json({
        message: "Successfully retrieved all users",
        data: users,
      });
      //   } catch (error) {
      //     res.status(500).json({
      //       message: "Gagal mengambil data pengguna",
      //       error: error.message,
      //     });
      //   }
      // },
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Gagal mengambil data pengguna",
      });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id; // Mengambil ID pengguna dari parameter permintaan

      // Mengambil pengguna berdasarkan ID
      const user = await User.findByPk(userId, {
        include: todos,
      });

      //     if (user) {
      //       res.status(200).json(user);
      //     } else {
      //       res.status(404).json({
      //         message: "Pengguna tidak ditemukan",
      //       });
      //     }
      //   } catch (error) {
      //     res.status(500).json({
      //       message: "Gagal mengambil data pengguna",
      //       error: error.message,
      //     });
      //   }
      // },

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      res.json({
        message: "Successfully retrieved user by id",
        data: user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },

  editUserById: async (req, res) => {
    try {
      //     const userId = req.params.id;
      //     const updatedUserData = req.body; // Assuming that the updated data is sent in the request body

      //     // Check if the user exists
      //     const user = await User.findByPk(userId);
      //     if (!user) {
      //       return res.status(404).json({
      //         message: "Pengguna tidak ditemukan",
      //       });
      //     }

      //     // Update user data
      //     await user.update(updatedUserData);

      //     // Fetch the updated user to send in the response
      //     const updatedUser = await User.findByPk(userId);

      //     res.status(200).json({
      //       message: "Pengguna berhasil diupdate",
      //       user: updatedUser,
      //     });
      //   } catch (error) {
      //     res.status(500).json({
      //       message: "Gagal mengupdate pengguna",
      //       error: error.message,
      //     });
      //   }
      // },
      const userId = req.params.id;

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      await user.update(req.body);

      res.json({
        message: "Successfully updated user by id",
        data: user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      //     const userId = req.params.id;
      //     const user = await User.findByPk(userId);

      //     if (!user) {
      //       return res.status(404).json({
      //         message: "Pengguna tidak ditemukan",
      //       });
      //     }

      //     await user.destroy();

      //     res.status(200).json({
      //       message: "Pengguna berhasil dihapus",
      //     });
      //   } catch (error) {
      //     res.status(500).json({
      //       message: "Gagal menghapus pengguna",
      //       error: error.message,
      //     });
      //   }
      // },
      const userId = req.params.id;

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      await user.destroy();

      res.json({
        message: "Successfully deleted user by id",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};
