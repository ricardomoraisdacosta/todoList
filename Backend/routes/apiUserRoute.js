const express = require("express");

const controllers = require("../controllers/userController");

const router = express.Router();

router.post("/login", controllers.userLogin);
router.post("/registration", controllers.userRegistration);
router.get("/get-users", controllers.getUsers);

exports.routes = router;
