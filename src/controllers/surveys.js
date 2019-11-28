const { getAllSurveys, getSingleSurvey } = require("../models/surveys");

module.exports = {
  getAllSurveys: (req, res) => {
    getAllSurveys()
      .then(response => res.json(response))
      .catch(error => res.json(error));
  },
  getSingleSurvey: (req, res) => {
    getSingleSurvey(req.params.id)
      .then(response => res.json(response[0]))
      .catch(error => res.json(error));
  }
};
