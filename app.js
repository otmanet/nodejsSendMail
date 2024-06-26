const express = require("express");
const { errorHandler } = require("./middleware/errorHandler.js");
const app = express();
const indexRoutes = require("./Routes/index.routes.js");
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", indexRoutes);
app.use(errorHandler);

module.exports = app;
