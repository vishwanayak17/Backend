const express = require("express");
const router = express.Router();
const academyController = require("../controllers/academyController");

router.post("/register", academyController.createAcademy);
router.post("/login", academyController.loginAcademy);
router.put("/update/:id", academyController.updateAcademy);
router.get("/", academyController.getAllAcademies);

module.exports = router;