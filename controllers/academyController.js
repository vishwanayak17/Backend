const Academy = require("../models/academymodels");
const bcrypt = require("bcryptjs");

// ✅ REGISTER
exports.createAcademy = async (req, res) => {
  try {
    const { name, email, password } = req.body;

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

    // 🔥 HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    const academy = await Academy.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Academy Registered 🎉",
      academy,
    });

  } catch (error) {
    console.log("REGISTER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ✅ LOGIN (SAFE VERSION)
exports.loginAcademy = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("LOGIN TRY:", email, password);

    const academy = await Academy.findOne({ email });

    if (!academy) {
      return res.status(400).json({
        success: false,
        message: "Academy not found",
      });
    }

    console.log("DB PASSWORD:", academy.password);

    // 🔥 FIX: ensure password exists
    if (!academy.password) {
      return res.status(500).json({
        success: false,
        message: "Password missing in DB",
      });
    }

    const isMatch = await bcrypt.compare(password, academy.password);

    console.log("MATCH RESULT:", isMatch);

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
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};