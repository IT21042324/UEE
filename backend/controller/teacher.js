const teacherModel = require("../model/teacher");

const findAllTeachers = async (req, res) => {
  try {
    const teachers = await teacherModel.find();
    res.status(200).json(teachers);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message, err);
  }
};

const findTeacherById = async function (req, res) {
  try {
    const teacher = await teacherModel.findById(req.params.id);
    res.status(200).json(teacher);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message, err);
  }
};

const updateTeacherById = async function (req, res) {
  try {
    const updatedTeacher = await teacherModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedTeacher);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message, err);
  }
};

module.exports = {
  findTeacherById,
  updateTeacherById,
  findAllTeachers,
};
