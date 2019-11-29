require("dotenv").config;
const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, "secretkey", (err, user) => {
      if (err) return res.sendStatus(403);
      req.level = user.level;
      next();
    });
  },
  verifyAdmin: (req, res, next) => {
    if (req.level === "administrator") {
      next();
    } else {
      res.sendStatus(403).json({ msg: "only administrator" });
    }
  }
};
