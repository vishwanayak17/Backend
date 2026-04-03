const express = require("express");
const router = express.Router();
const browserController = require("../controllers/browserController");

// Public routes
router.get("/academies", browserController.getAllAcademies);
router.get("/academies/:id", browserController.getAcademyById);


// Academy registration (POST)
router.post("/academies", browserController.createAcademy);
router.put("/academies/:id", browserController.updateAcademy);

module.exports = router;