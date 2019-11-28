const router = require("express").Router();

const users = require("./users");
const surveys = require("./surveys");

router.use("/users", users).use("/surveys", surveys);

module.exports = router;
