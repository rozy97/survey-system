const { getAllSurveys } = require("../models/surveys");

module.exports = {
  getAllSurveys: (req, res) => {
    getAllSurveys()
      .then(response => res.json(response))
      .catch(error => res.json(error));
  }
};
