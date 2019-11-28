const { getAllusers, editUser } = require("../models/users");

module.exports = {
  getAllusers: (req, res) => {
    getAllusers()
      .then(response => res.json(response))
      .catch(error => res.json(error));
  },

  edituser: (req, res) => {
    const id = req.params.id;
    const arr = req.body.answers;
    let data = [];
    arr.map(answer => {
      data = [...data, ...Object.values(answer)];
    });

    data = { answers: data.toString(), participated: "yes", score };
    editUser(id, data)
      .then(response => res.json(response))
      .catch(error => res.json(error));
  }
};
