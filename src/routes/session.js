const express = require("express");

const router = express.Router();

const sessionController = require("../controllers/session");

router.post("/", sessionController.userAuth);

module.exports = router;
