const mongoose = require("mongoose");

const AlertSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  severity: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low",
  },

  latitude: Number,
  longitude: Number,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Alert", AlertSchema);