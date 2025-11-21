import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    vehicleYear: {
      type: String,
      required: true,
      trim: true,
    },
    vehicleMakeModel: {
      type: String,
      required: true,
      trim: true,
    },
    requestedPackage: {
      type: String,
      required: true,
      trim: true,
    },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Quote", quoteSchema);
