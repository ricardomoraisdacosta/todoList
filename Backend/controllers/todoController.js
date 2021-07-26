const { response } = require("express");
const Todo = require("../models/todo");

exports.getTodos = (req, res) => {
  const todos = Todo.fetchAll(req.params.projectId);
  res.json(todos);
};

exports.getTodo = (req, res) => {
  res.json(Todo.getTodo(req.body.id));
};
exports.deleteTodo = (req, res) => {
  res.json(Todo.delete(req.body.id));
};
exports.editTodo = (req, res) => {
  res.json(
    Todo.edit(req.body.id, req.body.text, req.body.dueDate, req.body.completed)
  );
};

exports.doneTodo = (req, res) => {
  res.json(Todo.done(req.body.id));
};

exports.addTodo = (req, res) => {
  const todo = new Todo(
    req.body.text,
    req.body.dueDate,
    req.body.dateCreated,
    req.body.projectId
  );
  todo.save();

  res.json(todo);
};
