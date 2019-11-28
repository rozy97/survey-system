const db = require("../configs/db-config");

module.exports = {
  getAllSurveys: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM surveys", (error, response) => {
        !error ? resolve(response) : reject(error);
      });
    });
  }
};
