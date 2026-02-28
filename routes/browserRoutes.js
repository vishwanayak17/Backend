const express = require("express");
const router = express.Router();

const browserController = require("../controllers/browserController");

router.get("/academies", browserController.getAllAcademies);
router.get("/academies/:id", browserController.getAcademyById);

module.exports = router;