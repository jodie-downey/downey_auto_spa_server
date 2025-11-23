import errorHandler from "./middleware/errorHandler.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import quoteRouter from "./routes/quotes.js";
import reviewsRouter from "./routes/reviews.js";

const allowedOrigins = [
  "https://downeyautospa.com",
  "https://www.downeyautospa.com",
  "https://downey-auto-spa.onrender.com",
  "http://localhost:5173",
];

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());

app.use("/api", quoteRouter);
app.use("/api/reviews", reviewsRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
