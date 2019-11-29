const router = require("express").Router();
const { verifyToken, verifyAdmin } = require("../middleware/auth");
const {
  getAllusers,
  getUserById,
  register,
  login,
  registerAdmin,
  submitAnswers,
  getAllSubmissionAndScore,
  deleteUser
} = require("../controllers/users");

router
  .get("/", verifyToken, verifyAdmin, getAllusers)
  .get("/id/:id", verifyToken, getUserById)
  .get("/info", verifyToken, verifyAdmin, getAllSubmissionAndScore)
  .post("/register", register)
  .post("/login", login)
  .post("/registeradmin", verifyToken, verifyAdmin, registerAdmin)
  .post("/submit", verifyToken, submitAnswers)
  .delete("/id/:id", verifyToken, verifyAdmin, deleteUser);

module.exports = router;
