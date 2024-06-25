const express = require("express");
const { errorHandler } = require("./middleware/errorHandler.js");
const app = express();

app.use(express.json());
app.use("/api", indexRoutes);
app.use(errorHandler);

module.exports = app;
