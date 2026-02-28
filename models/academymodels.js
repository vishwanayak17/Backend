const mongoose = require("mongoose");

const academySchema = new mongoose.Schema(
  {
    academyName: { type: String, required: true },

    city: { 
      type: String, 
      required: true,
      enum: ["Ahmedabad", "Gandhinagar"]
    },

    area: { type: String, required: true },
    sports: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    facilities: [{ type: String }],

    // ✅ NEW FIELD (Admin Approval System)
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Academy", academySchema);