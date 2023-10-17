const router = require("express").Router();

const {
  userLogin,
  userSignUp,
  getUserById,
  getAllUsers,
  updateProfile,
  deleteUserById,
} = require("../controller/user");

router.post("/login", userLogin);
router.post("/signup", userSignUp);
router.get("/", getAllUsers);
router.patch("/update/:userId", updateProfile);
router.get("/:id", getUserById);
router.delete("/deleteUser/:id", deleteUserById);

module.exports = router;
