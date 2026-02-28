const Academy = require("../models/academymodels");

// CREATE ACADEMY (form submit)
exports.createAcademy = async (req, res) => {
  try {
    const academy = await Academy.create(req.body);

    res.status(201).json({
      success: true,
      message: "Academy Registered Successfully",
      data: academy
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// GET ALL ACADEMIES
exports.getAllAcademies = async (req, res) => {
  try {
    const academies = await Academy.find();

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

// GET SINGLE
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