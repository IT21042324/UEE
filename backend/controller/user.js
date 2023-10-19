const userModel = require("../model/user");
const studentModel = require("../model/student");
const teacherModel = require("../model/teacher");

const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET);
};

const userLogin = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await userModel.login(userName, password);

    const token = createToken(user._id);

    let data;

    if (user.userType === "student")
      data = await studentModel.findOne({ parentId: user._id });
    else data = await teacherModel.findOne({ parentId: user._id });

    res.json({
      ...user.toObject(),
      parentId: user._id,
      token,
      childId: data._id,
      ...data.toObject(),
    });
  } catch (err) {
    console.log(err.message);
    res.json({ err: err.message });
  }
};
const userSignUp = async function (req, res) {
  const { userName, password, userType, gender, plugins } = req.body;

  try {
    const user = await userModel.signup(userName, password, userType);

    let data;

    userType === "student"
      ? (data = await createStudent(user._id, gender, plugins))
      : (data = await createTeacher(user._id));

    const token = createToken(user._id);

    res.status(201).json({
      ...user.toObject(),
      parentId: user._id,
      token,
      childId: data._id,
      ...data.toObject(),
    });
  } catch (err) {
    console.log(err.message);
    res.json({ err: err.message });
  }
};

const createStudent = async (userId, gender, plugins) => {
  try {
    const data = await studentModel.create({
      parentId: userId,
      gender,
      plugins,
    });
    return data;
  } catch (err) {
    console.log(err.message);
    throw new Error("Error in creating student account");
  }
};

const createTeacher = async (userId) => {
  try {
    const data = await teacherModel.create({
      parentId: userId,
    });
    return data;
  } catch (err) {
    console.log(err.message);
    throw new Error("Error in creating teacher account");
  }
};

const getAllUsers = async function (req, res) {
  try {
    const users = await userModel.find();

    res.json(users);
  } catch (err) {
    res.send(err.message);
  }
};

const updateProfile = async function (req, res) {
  const id = req.params.id;
  const { userName, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  try {
    const user = await userModel.findOneAndUpdate(
      { _id: id },
      { userName, password: hash },
      { new: true }
    );

    return res.json(user);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const data = await userModel.findByIdAndDelete(req.params.id);

    if (data.userType === "student") await deleteStudentAccount(data._id);
    else await deleteTeacherAccount(data._id);

    res
      .status(200)
      .json("Account delete successfully. The deleted info is unrecoverable");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const deleteStudentAccount = async (parentId) => {
  try {
    await studentModel.findOneAndDelete({ parentId });
  } catch (err) {
    throw new Error("Error in deleting child student account");
  }
};

const deleteTeacherAccount = async (parentId) => {
  try {
    await teacherModel.findOneAndDelete({ parentId });
  } catch (err) {
    throw new Error("Error in deleting child student account");
  }
};

const getUserById = async function (req, res) {
  const { id } = req.params;

  try {
    const user = await userModel.find({ _id: id });

    let data;

    if (user.userType === "student")
      data = user.studentInfo = await findStudentWithParentId(id);
    else data = user.teacherInfo = await findTeacherWithParentId(id);

    res.status(200).json({
      ...user.toObject(),
      parentId: user._id,
      childId: data._id,
      ...data,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const findStudentWithParentId = async (parentId) => {
  try {
    const studentInfo = await studentModel.findOne({ parentId });
    return studentInfo;
  } catch (err) {
    throw new Error("Error in finding child student account");
  }
};

const findTeacherWithParentId = async (parentId) => {
  try {
    const parentInfo = await teacherModel.findOne({ parentId });
    return parentInfo;
  } catch (err) {
    throw new Error("Error in finding child teacher account");
  }
};

module.exports = {
  userSignUp,
  userLogin,
  getAllUsers,
  updateProfile,
  deleteUserById,
  getUserById,
};
