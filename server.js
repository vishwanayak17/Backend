const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const academyRoutes = require("./routes/academyRoutes");
const adminRoutes = require("./routes/adminRoutes");
const browserRoutes = require("./routes/browserRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connect
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/academy", academyRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", browserRoutes);   // public routes

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("MongoDB Connected");
});
