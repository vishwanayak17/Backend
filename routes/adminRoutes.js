const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

// dashboard
router.get("/dashboard", adminController.getDashboard);

// get pending academies
router.get("/pending-academies", adminController.getPendingAcademies);

// update status (approve/reject)
router.put("/academy-status/:id", adminController.updateAcademyStatus);

module.exports = router;