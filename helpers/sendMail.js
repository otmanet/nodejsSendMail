require("dotenv").config();
const nodeMailer = require("nodemailer");
const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL,
    pass: "jn7jnAPss4f63QBp6D",
  },
});
async function sendMail() {
  // const transport =
}

module.exports = sendMail;
