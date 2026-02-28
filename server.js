const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// routes import
const authRoutes = require("./routes/authRoutes");
const academyRoutes = require("./routes/academyRoutes");
const adminRoutes = require("./routes/adminRoutes");
const browserRoutes = require("./routes/browserRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/academy", academyRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", browserRoutes);   // 👈 public browser routes

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 404 route (important for debugging)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found ❌"
  });
});

// server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});