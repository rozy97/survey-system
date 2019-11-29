const router = require("express").Router();

const { verifyToken, verifyAdmin } = require("../middleware/auth");

const {
  getAllSurveys,
  getSingleSurvey,
  addSurvey,
  editSurvey,
  deleteSurvey
} = require("../controllers/surveys");

router
  .get("/", verifyToken, getAllSurveys)
  .get("/id/:id", verifyToken, getSingleSurvey)
  .post("/", verifyToken, verifyAdmin, addSurvey)
  .patch("/id/:id", verifyToken, verifyAdmin, editSurvey)
  .delete("/id/:id", verifyToken, verifyAdmin, deleteSurvey);

module.exports = router;
