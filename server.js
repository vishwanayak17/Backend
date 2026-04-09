// server.js me
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const academyRoutes = require("./routes/academyRoutes");
const adminRoutes = require("./routes/adminRoutes"); 

const app = express();

// Middleware
app.use(cors({ origin: "*" })); // ✅ ye allow karega frontend requests
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/sportsAcademy")
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/academies", academyRoutes);
app.use("/api/admin", adminRoutes); // correct route


// Test route
app.get("/", (req, res) => res.send("API running"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));