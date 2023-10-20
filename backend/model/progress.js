const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progressSchema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
    },
    parentId: { type: Schema.Types.ObjectId },
    gameType: String,
    gameName: String,
    gameCompletionTime: { type: String },
    incorrectAttempts: { type: String },
    questionCount: { type: Number },
    maximumAttempts: { type: Number, default: 0 },
    verdict: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Progress", progressSchema);
