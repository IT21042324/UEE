const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progressSchema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
    parentId: { type: Schema.Types.ObjectId, ref: "User" },
    gameType: String,
    gameName: String,
    maximumAttempts: { type: Number, default: 0 },
    questions: { type: Number, default: 0 },
    verdict: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Progress", progressSchema);
