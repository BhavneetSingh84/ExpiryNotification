/*
  Author: Bhavneet Singh
  Date: August 20, 2023
  Purpose: Sends email using SMTP settings
*/

//module to send emails
const nodemailer = require('nodemailer');

// Function to send an email
function sendEmail({ from, to, subject, text }) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true for 465, false otherwise
    auth: {
      user: 'noreply@example.com',
      pass: 'Password'
    }
  });
  

  const mailOptions = {
    from,
    to,
    subject,
    text
  };

  // error message
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = sendEmail;
