const express = require("express");
const router = express.Router();
const todos = require("../api/todos.json");

router.get("/todos", (req, res) => {
  res.json(todos);
});

module.exports = router;
