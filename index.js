import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import connectDb from "./db/connectDb.js";
dotenv.config();

const app = express();

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});
