import { BadRequestError } from "jodiedowney-errors";
import Quote from "../models/Quote.js";
import { sendQuoteNotification } from "../config/mailer.js";

const submitQuote = async (req, res) => {
  try {
    const {
      name,
      vehicleYear,
      vehicleMakeModel,
      requestedPackage,
      phone,
      email,
    } = req.body;

    if (
      !name ||
      !vehicleYear ||
      !vehicleMakeModel ||
      !requestedPackage ||
      !phone ||
      !email
    ) {
      throw new BadRequestError("All fields are required");
    }

    const newQuote = await Quote.create({
      name,
      vehicleYear,
      vehicleMakeModel,
      requestedPackage,
      phone,
      email,
    });

    await sendQuoteNotification(newQuote);

    res.status(201).json({
      message: "Quote request submitted successfully.",
      quote: newQuote,
    });
  } catch (error) {
    try {
    } catch (error) {
      next(error);
    }
  }
};

export { submitQuote };
