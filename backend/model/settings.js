const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settingSchema = new Schema(
  {
    language: {
      type: String,
      default: "en-US",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", settingSchema);
