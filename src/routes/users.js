const express = require("express");

const router = express.Router();
const authorizeAdmin = require('../middlewares/authorization');
const usersController = require("../controllers/user");

router.get("/:id", usersController.get);

router.put("/:id", usersController.update);

router.get("/", authorizeAdmin, usersController.getAll);

router.post("/", authorizeAdmin, usersController.create);

module.exports = router;
