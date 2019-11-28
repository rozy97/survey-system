require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const root = require("./src/routes/root");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger("dev"));
app.use("/api", root);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
