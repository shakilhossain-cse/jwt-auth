const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "zachery.johnson66@ethereal.email",
    pass: "BdBUmxuME6yZjbabpu",
  },
});

module.exports = async (senderEmail, link) => {
  let error = false;
  try {
    await transporter.sendMail({
      from: '"testing 👻" <shakil@gmail.com>', // sender address
      to: senderEmail, // list of receivers
      subject: "Verify Email Address ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `Please Varify email address by clicking  this link <a href="${link}">varify email address</a> <br/> this email is valid for only 1h`, // html body
    });
  } catch (e) {
    error = true;
  }
  return error;
};
