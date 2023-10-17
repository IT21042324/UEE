const router = require("express").Router();

const {
  findAllStudents,
  updateStudentById,
  findStudentById,
} = require("../controller/student");

router.get("/:id", findAllStudents);
router.get("/", findStudentById);
router.patch("/update/:id", updateStudentById);

module.exports = router;
