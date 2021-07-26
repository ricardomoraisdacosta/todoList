const express = require("express");

const controllers = require("../controllers/todoController");

const router = express.Router();

router.get("/get-all/:projectId", controllers.getTodos);
router.get("/get-todo", controllers.getTodo);
router.put("/delete", controllers.deleteTodo);
router.put("/edit", controllers.editTodo);
router.put("/done", controllers.doneTodo);
router.post("/add", controllers.addTodo);

exports.routes = router;
