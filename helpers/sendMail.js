require("dotenv").config();
const nodeMailer = require("nodemailer");
const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD,
  },
});

async function sendMail() {
  try {
    await transporter.sendMail({
      from: process.env.MAIL,
      to: process.env.MAIL_RECEIVER,
      subject: "Hello",
      text: "Hello world ?",
      html: "<b>Hello world</b>",
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = sendMail;
