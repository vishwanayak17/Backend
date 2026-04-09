const mongoose = require("mongoose");

const academySchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // 🔥 ADD THIS
   academyName: String, 
  city: String,
  area: String,
  rating: Number,
  status: String,
  image: String,
  description: String,
  phone: String,
  timing: String,
  address: String,
  sports: [String],
  facilities: [String],
  achievements: {
    players: String,
    students: String,
    experience: String
  },
  gallery: [String],
  map: String
});

module.exports = mongoose.model("Academy", academySchema);