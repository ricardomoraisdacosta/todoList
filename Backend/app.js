const express = require("express");
const app = express();

const apiUser = require("./routes/apiUserRoute");
const apiProjects = require("./routes/apiProjectsRoute");
const apiTodo = require("./routes/apiTodoRoute");

app.use((req, res, next) => {
  // Add header for Cors
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user", apiUser.routes);
app.use("/project", apiProjects.routes);
app.use("/todo", apiTodo.routes);

const port = 3002;

app.listen(port, () => console.log(`Listening on port ${port}`));
