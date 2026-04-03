const User = require("../models/user.model");
const Academy = require("../models/academymodels");
const bcrypt = require("bcryptjs");

exports.loginAcademy = async (req, res) => {
  try {
    console.log("LOGIN TRY:", req.body.email, req.body.password);

    const { email, password } = req.body || {};

    // ✅ Check input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password required"
      });
    }

    // ✅ User collection se find karo (password wahan hai)
    const user = await User.findOne({ email, role: "academy" });
    console.log("USER FOUND:", user);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Academy not found"
      });
    }

    if (!user.password) {
      return res.status(500).json({
        success: false,
        message: "Password missing in DB"
      });
    }

    console.log("DB PASSWORD:", user.password);

    // ✅ Password match karo
    const isMatch = await bcrypt.compare(
      String(password),
      String(user.password)
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password"
      });
    }

    // ✅ Academy details bhi fetch karo
    const academy = await Academy.findOne({ email });

    res.status(200).json({
      success: true,
      message: "Login successful 🎉",
      user,
      academy
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};