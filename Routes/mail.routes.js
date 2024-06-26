const router = require("express").Router();
const { sendMail } = require("../controllers/mailController");
router.route("/sendmail").post(sendMail);

module.exports = router;
