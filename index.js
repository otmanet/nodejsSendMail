const app = require("./app");
const http = require("http");
const asyncHandler = require("express-async-handler");
const portServer = 8080;
const server = http.createServer(app);

const startServer = asyncHandler(async () => {
  server.listen(PORT, () => {
    console.log(`server start on port ${portServer}`);
  });
});
