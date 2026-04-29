const controller = require("../Controller/userController");
const express = require("express");
const router = express.Router();

router.post("/users", controller.create);
router.get("/", controller.Home);
module.exports = router


