const User = require("../models/user.model");
const Academy = require("../models/academymodels");
const bcrypt = require("bcryptjs");

// ✅ LOGIN
exports.loginAcademy = async (req, res) => {
  try {
    console.log("LOGIN TRY:", req.body.email, req.body.password);

    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password required"
      });
    }

    // ✅ Pehle User model mein dhundo
    let user = await User.findOne({ email });
    let isAcademyModel = false;

    // ✅ Agar User mein nahi mila to Academy model mein dhundo
    if (!user) {
      user = await Academy.findOne({ email });
      isAcademyModel = true;
    }

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Account not found"
      });
    }

    if (!user.password) {
      return res.status(500).json({
        success: false,
        message: "Password missing in DB"
      });
    }

    console.log("DB PASSWORD:", user.password);

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

    // ✅ Agar Academy model se mila to directly return karo
    if (isAcademyModel) {
      return res.status(200).json({
        success: true,
        message: "Login successful 🎉",
        user: null,
        academy: user
      });
    }

    // ✅ User model se mila to academy bhi dhundo
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

// ✅ CHANGE PASSWORD
exports.changePassword = async (req, res) => {
  try {
    const { email, currentPassword, newPassword, confirmPassword } = req.body || {};

    if (!email || !currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Sab fields bharo"
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "New password aur Confirm password match nahi kar rahe"
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "New password kam se kam 6 characters ka hona chahiye"
      });
    }

    // ✅ Pehle User model mein dhundo
    let user = await User.findOne({ email });

    // ✅ Agar nahi mila to Academy model mein dhundo
    if (!user) {
      user = await Academy.findOne({ email });
    }

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Account nahi mila"
      });
    }

    const isMatch = await bcrypt.compare(
      String(currentPassword),
      String(user.password)
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password galat hai"
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password successfully change ho gaya! 🎉"
    });

  } catch (error) {
    console.error("CHANGE PASSWORD ERROR:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};