// Load Users Model
const {
  getAllusers,
  getUserById,
  getUserByEmail,
  addUser,
  editUser,
  deleteUser
} = require("../models/users");
const { getAllSurveys } = require("../models/surveys");
const jwt = require("jsonwebtoken"); // jwt for generate token

module.exports = {
  getAllusers: (req, res) => {
    getAllusers()
      .then(response => res.json(response))
      .catch(error => res.json(error));
  },
  getUserById: (req, res) => {
    const id = req.params.id;
    getUserById(id)
      .then(response => res.json(response))
      .catch(error => res.json(error));
  },
  register: (req, res) => {
    const data = req.body;
    getUserByEmail(data.email)
      .then(result => {
        if (result.length === 0) {
          // if email not registered, then execute adduser func
          addUser(data)
            .then(response =>
              res.json({ ...response, msg: "register success" })
            )
            .catch(error => res.json(error));
        } else {
          res.json({ msg: "Email already registered" });
        }
      })
      .catch(error => res.json(error));
  },
  login: (req, res) => {
    const data = req.body;
    getUserByEmail(data.email)
      .then(result => {
        if (result.length != 0) {
          // Checking email in the database
          if (data.password === result[0].password) {
            // compare req password with password in the db
            const { id, name, email, password, level } = result[0];
            const payload = {
              // create payload
              id,
              name,
              email,
              password,
              level
            };
            const token = "Bearer " + jwt.sign(payload, "secretkey"); // generating token for authentication
            res.json(token);
          } else {
            res.json({ msg: "password incorrect" });
          }
        } else {
          res.json({ msg: "Email not registered" });
        }
      })
      .catch(error => res.json(error));
  },
  registerAdmin: (req, res) => {
    const id = req.body.id;
    const level = req.body.level; // patch level field in the database
    const data = { level };
    editUser(id, data)
      .then(response => res.json(response))
      .catch(error => res.json(error));
  },

  submitAnswers: (req, res) => {
    getAllSurveys()
      .then(result => {
        const id = req.id;
        const arr = req.body;
        if (result.length === arr.length) {
          // all question must be answered
          let data = [],
            score = 0;

          for (let i = 0; i < arr.length; i++) {
            if (result[i].answer == arr[i].answer) {
              score += 1;
            }
            data = [...data, ...Object.values(arr[i])];
          }

          data = { answers: data.toString(), participated: "yes", score };
          editUser(id, data)
            .then(response =>
              res.json({ ...response, msg: `your score: ${score}` })
            )
            .catch(error => res.json(error));
        } else {
          res.json({ msg: "you must answer all the question" });
        }
      })
      .catch(error => res.json(error));
  },
  getAllSubmissionAndScore: (req, res) => {
    getAllusers()
      .then(response => {
        let count = 0;
        response = response.filter(i => i.participated === "yes"); // filter only participated user
        response.map(i => (count += i.score));
        res.json({
          submission: response.length,
          avrScore: count / response.length // count which is sum of all score, devided by length of data (simple math)
        });
      })
      .catch(error => res.json(error));
  },
  deleteUser: (req, res) => {
    const id = req.params.id;
    deleteUser(id)
      .then(response => res.json(response))
      .catch(error => res.json(error));
  }
};
