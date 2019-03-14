const express = require("express");
const next = require("next");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// const todosState = require("./api/todos.json");
// console.log("atate todos", todos);
app
  .prepare()
  .then(() => {
    const server = express();
    const showRoutes = require("./routes/index.js");

    server.use("/api", showRoutes);
    // =================
    server.use(bodyParser.json());
    // server.use(bodyParser.urlencoder({extended:true}))

    server.post("/api/todos", (req, res) => {
      const todos = [];
      console.log("atate todos", todos);

      const updateTodo = req.body.todo;
      todos.push(updateTodo);
      console.log("from req", req.body.title);

      res.send(todos);
    });
    // =================
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
