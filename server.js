require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const surveys = require("./src/routes/surveys");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(surveys);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
