const router = require("express").Router();
const { getAllSurveys } = require("../controllers/surveys");
router.get("/", getAllSurveys);
module.exports = router;
