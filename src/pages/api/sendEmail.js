import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    console.log("Received fields:", email, name, message);
    console.log(
      "Auth settings:",
      process.env.NEXT_PUBLIC_MAIL_URL,
      process.env.NEXT_PUBLIC_MAIL_PASS
    );

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NEXT_PUBLIC_MAIL_URL,
          pass: process.env.NEXT_PUBLIC_MAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.NEXT_PUBLIC_MAIL_URL,
        subject: `Message from ${name} (${email})`,
        text: message,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Failed to send email", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
