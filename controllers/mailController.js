const asyncHandler = require("express-async-handler");

const sendMail = asyncHandler(async (req, res) => {
  console.log("send mail successfully");
});

module.exports = {
  sendMail,
};
