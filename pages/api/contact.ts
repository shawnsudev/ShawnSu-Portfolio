// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { contactFormData } from "../../utils/types";
import { mailOptions, transporter } from "../../config/nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data: contactFormData = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: data.message,
        html: `
        <h1>📨 Portfolio Site Message</h1>
        <h2>Subject: ${data.subject}</h2>
        <p>From: ${data.email}</p>
        <p>Name: ${data.name}</p>
        <p>Message: ${data.message}</p>
        `,
      });

      return res.status(200).json({ success: true });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
}
