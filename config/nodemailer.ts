import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  // We send form data as emails from our email address to our email address, because we don't have access to form users' actual email addresses
  from: email,
  to: email,
};
