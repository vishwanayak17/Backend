const Academy = require("../models/academymodels");

// ✅ ADMIN LOGIN
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = {
      email: "admin@gmail.com",
      password: "123456"
    };

    if (email !== admin.email || password !== admin.password) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    res.status(200).json({
      success: true,
      message: "Admin login successful",
      admin: { email: admin.email }
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ GET DASHBOARD
exports.getDashboard = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Admin dashboard working 🚀"
  });
};

// ✅ GET PENDING ACADEMIES
exports.getPendingAcademies = async (req, res) => {
  try {
    const academies = await Academy.find({ status: "pending" });
    res.status(200).json({
      success: true,
      count: academies.length,
      data: academies
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ GET ACADEMIES BY STATUS
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
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ APPROVE / REJECT ACADEMY
exports.updateAcademyStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!status || !["approved", "rejected"].includes(status)) {
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
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ DELETE ACADEMY
exports.deleteAcademy = async (req, res) => {
  try {
    const academy = await Academy.findByIdAndDelete(req.params.id);

    if (!academy) {
      return res.status(404).json({
        success: false,
        message: "Academy not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Academy deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};