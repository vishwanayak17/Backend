const Academy = require("../models/academymodels");


// =============================
// 1️⃣ Admin Dashboard
// =============================
exports.getDashboard = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Admin dashboard working 🚀"
  });
};


// =============================
// 2️⃣ Get Pending Academies
// =============================
exports.getPendingAcademies = async (req, res) => {
  try {
    const academies = await Academy.find({ status: "pending" });

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


exports.getAcademiesByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    const academies = await Academy.find({ status });

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


// =============================
// 3️⃣ Approve / Reject Academy
// =============================
exports.updateAcademyStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // validation
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required (approved / rejected)"
      });
    }

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value"
      });
    }

    const academy = await Academy.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!academy) {
      return res.status(404).json({
        success: false,
        message: "Academy not found"
      });
    }

    res.status(200).json({
      success: true,
      message: `Academy ${status} successfully`,
      data: academy
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};