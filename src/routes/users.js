const router = require("express").Router();
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
  .get("/", getAllusers)
  .get("/id/:id", getUserById)
  .get("/info", getAllSubmissionAndScore)
  .post("/register", register)
  .post("/login", login)
  .post("/registeradmin", registerAdmin)
  .patch("/id/:id", submitAnswers)
  .delete("/id/:id", deleteUser);

module.exports = router;
