const router = require("express").Router();
const { getAllSurveys, getSingleSurvey } = require("../controllers/surveys");

router.get("/", getAllSurveys).get("/id/:id", getSingleSurvey);

module.exports = router;
