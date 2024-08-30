import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import paymentRoutes from "./routes/paymentRoutes.js";
import subscriberRoutes from "./routes/SubscriberRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/subscribers", subscriberRoutes);
app.use("/api/payment", paymentRoutes);

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.get("/test", (req, res) => {
  res.send("Backend is working!");
});

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, "../client/build")));

// Handle React routing, return all requests to React app
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))
// );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
