const express = require("express");
const router = express.Router();

// ✅ IMPORT CONTROLLER
const academyController = require("../controllers/academyController");

// ✅ ROUTES (DIRECT CALL - NO DESTRUCTURE CONFUSION)
router.post("/register", academyController.createAcademy);
router.post("/login", academyController.loginAcademy);



module.exports = router;