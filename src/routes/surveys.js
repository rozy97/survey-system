const router = require("express").Router();
const {
  getAllSurveys,
  getSingleSurvey,
  addSurvey,
  editSurvey,
  deleteSurvey
} = require("../controllers/surveys");

router
  .get("/", getAllSurveys)
  .get("/id/:id", getSingleSurvey)
  .post("/", addSurvey)
  .patch("/id/:id", editSurvey)
  .delete("/id/:id", deleteSurvey);

module.exports = router;
