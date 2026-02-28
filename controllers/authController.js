const User = require("../models/user.model");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const user = await User.create({ name, email, password, role });

    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  res.json({
    success: true,
    message: "Login API working"
  });
};