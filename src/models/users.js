const db = require("../configs/db-config");

module.exports = {
  getAllusers: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (error, response) => {
        !error ? resolve(response) : reject(error);
      });
    });
  },
  getUserById: id => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id=?", [id], (error, response) => {
        !error ? resolve(response) : reject(error);
      });
    });
  },
  getUserByName: name => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE name=?",
        [name],
        (error, response) => {
          !error ? resolve(response) : reject(error);
        }
      );
    });
  },
  addUser: data => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO users SET ?", [data], (error, response) => {
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
  },
  deleteUser: id => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM users WHERE id=?", [id], (error, response) => {
        !error ? resolve(response) : reject(error);
      });
    });
  }
};
