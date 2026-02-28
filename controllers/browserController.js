const Academy = require("../models/academymodels");

// GET all academies (only approved for public)
exports.getAllAcademies = async (req, res) => {
  try {
    const academies = await Academy.find({ status: "approved" });

    res.status(200).json({
      success: true,
      count: academies.length,
      data: academies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET single academy
exports.getAcademyById = async (req, res) => {
  try {
    const academy = await Academy.findById(req.params.id);

    if (!academy) {
      return res.status(404).json({
        success: false,
        message: "Academy not found"
      });
    }

    res.status(200).json({
      success: true,
      data: academy
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};