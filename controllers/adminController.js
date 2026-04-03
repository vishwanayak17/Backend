const Academy = require("../models/academymodels");
const jwt = require("jsonwebtoken");

// =============================
// 🔐 0️⃣ ADMIN LOGIN
// =============================
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ⚠️ Hardcoded admin (submission ke liye best)
    const admin = {
      email: "admin@gmail.com",
      password: "123456"
    };

    // Check credentials
    if (email !== admin.email || password !== admin.password) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Generate token
    const token = jwt.sign(
      { role: "admin", email: admin.email },
      "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: "Admin login successful",
      token
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

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

// =============================
// 3️⃣ Get Academies by Status
// =============================
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
// 4️⃣ Approve / Reject Academy
// =============================
exports.updateAcademyStatus = async (req, res) => {
  try {
    const { status } = req.body;

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

// =============================
// 5️⃣ DELETE ACADEMY
// =============================
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
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};