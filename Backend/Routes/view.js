const express = require("express");
const userController = require("../Controller/userController");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("index", { error: req.query.error, success: req.query.success });
})

router.get("/signin", (req, res)=>{
    res.render("signin", { success: req.query.success });
})

router.get("/users", userController.getAllUsers);

router.post("/users/create", userController.createUser);
router.post("/users/signin", userController.create);


module.exports = router
