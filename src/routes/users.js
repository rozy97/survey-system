const router = require("express").Router();
const { getAllusers, edituser } = require("../controllers/users");

router.get("/", getAllusers).patch("/id/:id", edituser);

module.exports = router;
