const express = require("express");

const controllers = require("../controllers/projectsController");

const router = express.Router();

router.get("/get-all/:user", controllers.getProjects);
router.get("/get-project", controllers.getProject);
router.delete("/delete", controllers.deleteProject);
router.put("/edit", controllers.editProject);
router.post("/add", controllers.addProject);

exports.routes = router;
