const db = require("../configs/db-config");

module.exports = {
  getAllSurveys: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM surveys", (error, response) => {
        !error ? resolve(response) : reject(error);
      });
    });
  },
  getSingleSurvey: id => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM surveys WHERE id=?", [id], (error, response) => {
        !error ? resolve(response) : reject(error);
      });
    });
  },
  addSurvey: data => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO surveys SET ?", [data], (error, response) => {
        !error ? resolve(response) : reject(error);
      });
    });
  },
  editSurvey: (id, data) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE surveys SET ? WHERE id=?",
        [data, id],
        (error, response) => {
          !error ? resolve(response) : reject(error);
        }
      );
    });
  },
  deleteSurvey: id => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM surveys WHERE id=?", [id], (error, response) => {
        !error ? resolve(response) : reject(error);
      });
    });
  }
};
