const asyncHandler = require("express-async-handler");
const sendMail = require("../helpers/sendMail");
const functionSendMail = asyncHandler(async (req, res) => {
  await sendMail();
  return res.status(200).json({
    message: "Send mail successfully",
  });
});

module.exports = {
  functionSendMail,
};
