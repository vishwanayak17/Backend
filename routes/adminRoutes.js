const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// ✅ Admin Login
router.post("/login", adminController.loginAdmin);

// Admin dashboard
router.get("/dashboard", adminController.getDashboard);

// Pending academies
router.get("/academies/pending", adminController.getPendingAcademies);

// Academies by status
router.get("/academies/status/:status", adminController.getAcademiesByStatus);

// Approve / Reject academy
router.put("/academies/:id/status", adminController.updateAcademyStatus);
router.delete("/academies/:id", adminController.deleteAcademy);

module.exports = router;