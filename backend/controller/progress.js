const progressModel = require("../model/progress");

const findProgressOfAllStudents = async (req, res) => {
  try {
    const progress = await progressModel.find();
    res.status(200).json(progress);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message, err);
  }
};

const findProgressWithStudentId = async (req, res) => {
  try {
    const progress = await progressModel.find({ studentId: req.params.id });
    res.status(200).json(progress);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message, err);
  }
};

const createNewProgressRecord = async (req, res) => {
  try {
    const progress = await progressModel.create(req.body);
    res.status(201).json(progress);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message, err);
  }
};

module.exports = {
  findProgressOfAllStudents,
  findProgressWithStudentId,
  createNewProgressRecord,
};
