const Academy = require("../models/academymodels");
const bcrypt = require("bcryptjs");

// ✅ REGISTER
exports.createAcademy = async (req, res) => {
  try {
    const { 
      name, email, password, academyName,
      city, area, sports, phone,
      description, image, facilities
    } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const existing = await Academy.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Academy already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const academy = await Academy.create({
      name, email, password: hashedPassword,
      academyName, city, area, sports,
      phone, description, image, facilities
    });

    res.status(201).json({
      success: true,
      message: "Academy Registered 🎉",
      academy,
    });

  } catch (error) {
    console.log("REGISTER ERROR:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ LOGIN
exports.loginAcademy = async (req, res) => {
  try {
    const { email, password } = req.body;

    const academy = await Academy.findOne({ email });

    if (!academy) {
      return res.status(400).json({
        success: false,
        message: "Academy not found",
      });
    }

    if (!academy.password) {
      return res.status(500).json({
        success: false,
        message: "Password missing in DB",
      });
    }

    const isMatch = await bcrypt.compare(password, academy.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful 🎉",
      academy,
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ UPDATE ACADEMY
exports.updateAcademy = async (req, res) => {
  try {
    const academy = await Academy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Academy Updated 🎉",
      academy,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ GET ALL ACADEMIES
exports.getAllAcademies = async (req, res) => {
  try {
    const academies = await Academy.find();
    res.status(200).json({
      success: true,
      data: academies
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};