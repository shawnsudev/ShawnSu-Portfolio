// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { contactFormData } from "../../utils/types";
import { mailOptions, transporter } from "../../config/nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data: contactFormData = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      // Bug: local dev can send email, no problems; vercel.com production can't.
      // Attemptable Solution: add 'await' to make sure promise resolved 
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: data.message,
        html: `
        <h1>📨New Message From Portfolio Site</h1>
        <h2>From: </h2>
        <p>${data.email}</p>
        <h2>Name:</h2>
        <p>${data.name}</p>
        <h2>Company:</h2>
        ${data.company ? "<p>" + data.company + "</p>" : "NA"}
        <h2>Subject:</h2>
        <p>${data.subject}</p>
        <h2>Message:</h2>
        <p>${data.message}</p>
        `,
      });

      return res.status(200).json({ success: true });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
}
