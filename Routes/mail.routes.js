const router = require("express").Router();
const { functionSendMail } = require("../controllers/mailController");
router.route("/sendmail").post(functionSendMail);

module.exports = router;
