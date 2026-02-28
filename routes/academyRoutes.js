const express = require("express");
const router = express.Router();

const academyController = require("../controllers/academyController");

// CREATE
router.post("/register", academyController.createAcademy);

// GET ALL
router.get("/", academyController.getAllAcademies);

// GET SINGLE
router.get("/:id", academyController.getAcademyById);

module.exports = router;