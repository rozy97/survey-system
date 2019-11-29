require("dotenv").config;
const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    const authHeader = req.headers["authorization"]; // get bearer token from headers
    const token = authHeader && authHeader.split(" ")[1]; // get only token
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, "secretkey", (err, user) => {
      // if token verified, execute next func
      if (err) return res.sendStatus(403);
      req.level = user.level;
      req.id = user.id;
      next();
    });
  },
  verifyAdmin: (req, res, next) => {
    if (req.level === "administrator") {
      // simple condition for checking admin
      next();
    } else {
      res.sendStatus(403).json({ msg: "only administrator" });
    }
  }
};
