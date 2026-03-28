const mongoose = require("mongoose");

const academySchema = new mongoose.Schema(
  {
    academyName: { type: String, required: true },
    city: { 
      type: String, 
      required: true,
      enum: ["Ahmedabad", "Gandhinagar"]   // ✅ enum applied
    },
    area: { type: String, required: true },
    sports: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    facilities: [{ type: String }],
    status: { type: String, default: "pending" } // ✅ new field for approval
  },
  { timestamps: true }
);

module.exports = mongoose.model("Academy", academySchema);