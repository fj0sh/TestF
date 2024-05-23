const express  = require('express');
const router = express.Router();
const authController = require("../controller/auth.controller");

router.get("/", authController.displayUsers);
router.post("/register", authController.registerUser);
router.post("/login", authController.login);


module.exports = router;