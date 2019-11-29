// Load dotenv driver to enable export environment variable
require("dotenv").config();

// Load required module
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const root = require("./src/routes/root");

const app = express();

app.use(express.json()); // Parsing request body
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // enable cross origin
app.use(logger("dev")); // Logging request into console
app.use("/api", root); // Call enntry point routing

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
