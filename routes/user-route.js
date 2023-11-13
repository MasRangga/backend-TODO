const express = require("express");
const route = express.Router();

const {
  getAllUser,
  getUserById,
  deleteUserById,
  editUserById,
} = require("../controllers/users-controller");

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.delete("/:id", deleteUserById);
route.put("/:id", editUserById);

module.exports = route;
