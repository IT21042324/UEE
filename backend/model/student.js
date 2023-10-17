const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    gender: String,
    plugins: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
