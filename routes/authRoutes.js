const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

//router.post("/register", authController.register);
router.post("/login", authController.loginAcademy);
router.post("/change-password", authController.changePassword);

module.exports = router;