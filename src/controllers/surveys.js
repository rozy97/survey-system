const {
  getAllSurveys,
  getSingleSurvey,
  addSurvey,
  editSurvey,
  deleteSurvey
} = require("../models/surveys");

module.exports = {
  getAllSurveys: (req, res) => {
    getAllSurveys()
      .then(response => res.json(response))
      .catch(error => res.json(error));
  },
  getSingleSurvey: (req, res) => {
    const id = req.params.id;
    getSingleSurvey(id)
      .then(response => res.json(response[0]))
      .catch(error => res.json(error));
  },
  addSurvey: (req, res) => {
    const data = { ...req.body };
    addSurvey(data)
      .then(response => res.json(response))
      .catch(error => res.json(error));
  },
  editSurvey: (req, res) => {
    const id = req.params.id;
    const data = { ...req.body };
    editSurvey(id, data)
      .then(response => res.json(response))
      .catch(error => res.json(error));
  },
  deleteSurvey: (req, res) => {
    const id = req.params.id;
    deleteSurvey(id)
      .then(response => res.json(response))
      .catch(error => res.json(error));
  }
};
