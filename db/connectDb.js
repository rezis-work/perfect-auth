import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
