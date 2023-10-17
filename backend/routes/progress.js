const {
  findProgressOfAllStudents,
  findProgressWithStudentId,
  createNewProgressRecord,
} = require("../controller/progress");

const router = require("express").Router();

router.get("/:id", findProgressWithStudentId);
router.get("/", findProgressOfAllStudents);
router.post("/", createNewProgressRecord);

module.exports = router;
