const studentModel = require("../model/student");

const findAllStudents = async (req, res) => {
  try {
    const student = await studentModel.find();
    res.status(200).json(student);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message, err);
  }
};

const findStudentById = async function (req, res) {
  try {
    const student = await studentModel.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message, err);
  }
};

const updateStudentById = async function (req, res) {
  try {
    const updatedStudent = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedStudent);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message, err);
  }
};

module.exports = {
  findStudentById,
  updateStudentById,
  findAllStudents,
};
