const db = require("../configs/db-config");

module.exports = {
  getAllusers: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (error, response) => {
        !error ? resolve(response) : reject(error);
      });
    });
  },
  editUser: (id, data) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE users SET ? WHERE id=?",
        [data, id],
        (error, response) => {
          !error ? resolve(response) : reject(error);
        }
      );
    });
  }
};
