const {
  getAllusers,
  getUserById,
  getUserByEmail,
  addUser,
  editUser,
  deleteUser
} = require("../models/users");
const { getAllSurveys } = require("../models/surveys");
const jwt = require("jsonwebtoken");

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
          if (data.password === result[0].password) {
            const { id, name, email, password, level } = result[0];
            const payload = {
              id,
              name,
              email,
              password,
              level
            };
            const token = "Bearer " + jwt.sign(payload, "secretkey");
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
    const data = { ...req.body.level };
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
            .then(response => res.json(response))
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
        response = response.filter(i => i.participated === "yes");
        response.map(i => (count += i.score));
        res.json({
          submission: response.length,
          avrScore: count / response.length
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
