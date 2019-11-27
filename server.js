require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
