import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendQuoteNotification = async (quote) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.NOTIFY_TO,
      subject: `New Quote Request from ${quote.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${quote.name}</p>
        <p><strong>Phone:</strong> ${quote.phone}</p>
        <p><strong>Email:</strong> ${quote.email}</p>
        <p><strong>Vehicle Year:</strong> ${quote.vehicleYear}</p>
        <p><strong>Make & Model:</strong> ${quote.vehicleMakeModel}</p>
        <p><strong>Requested Work:</strong> ${quote.requestedPackage}</p>
      `,
      text: `
        New Quote Request:

        Name: ${quote.name}
        Phone: ${quote.phone}
        Email: ${quote.email}
        Vehicle Year: ${quote.vehicleYear}
        Make & Model: ${quote.vehicleMakeModel}
        Requested Work: ${quote.requestedPackage}
      `,
    });

    console.log("Quote notification email sent successfully!");
  } catch (error) {
    console.error("Error sending quote notification:", error);
    throw error;
  }
};
