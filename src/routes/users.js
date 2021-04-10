const express = require("express");

const router = express.Router();

const usersController = require("../controllers/user");

router.get("/:id", usersController.get);

router.get("/", usersController.getAll);

router.post("/", usersController.create);

module.exports = router;
