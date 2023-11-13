const express = require("express");
const route = express.Router();

const authRoutes = require("./auth-route");
const userRoutes = require("./user-route");
const todoRoutes = require("./todo-route");
const verifyToken = require("../middleware/auth");

route.get("/", (req, res) => {
  res.json({
    message: "Untuk melihat endpoints penggunaan API ini dapat mengunjungi",
    link: "https://github.com/MasRangga/backend-TODO.git",
  });
});

route.use("/auth", authRoutes);
route.use("/users", userRoutes);
route.use("/todos", verifyToken, todoRoutes);

module.exports = route;
