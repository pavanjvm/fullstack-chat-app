import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DOCUMENTDB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true, // Use TLS instead of SSL
      tlsCAFile: "global-bundle.pem", // Correct way to specify the CA file
    });

    console.log(`Connected to Amazon DocumentDB: ${conn.connection.host}`);
  } catch (error) {
    console.error("DocumentDB connection error:", error);
    process.exit(1); // Exit process if connection fails
  }
};
