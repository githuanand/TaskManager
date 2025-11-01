const express = require("express");
const router = express.Router();

let todos = [];

// GET /api/todos
router.get("/", (req, res) => {
  res.json(todos);
});

// POST /api/todos
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  const newTodo = { id: Date.now(), title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

module.exports = router;
