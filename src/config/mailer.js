import nodemailer from "nodemailer";

export const sendQuoteNotification = async (quote) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.NOTIFY_TO,
    subject: `New Quote Request from ${quote.name}`,
    text: `
A new quote request has been submitted:

Name: ${quote.name}
Phone: ${quote.phone}
Email: ${quote.email}
Vehicle Year: ${quote.vehicleYear}
Make & Model: ${quote.vehicleMakeModel}
Requested Work: ${quote.requestedPackage}
`,
  };

  await transporter.sendMail(mailOptions);
};
