const router = require("express").Router();

const {
  findAllTeachers,
  findTeacherById,
  updateTeacherById,
} = require("../controller/teacher");

router.get("/:id", findAllTeachers);
router.get("/", findTeacherById);
router.patch("/update/:id", updateTeacherById);

module.exports = router;
