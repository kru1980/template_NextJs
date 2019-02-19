const express = require("express");
const router = express.Router();
const todos = require("../api/todos.json");

router.get("/todos", (req, res) => {
  res.send(todos);
});

module.exports = router;
