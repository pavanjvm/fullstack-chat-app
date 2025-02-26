import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DOCUMENTDB_URI, {
      tls: true, // Use TLS instead of SSL
      tlsCAFile: "global-bundle.pem", // Amazon CA Cert
    });

    console.log(`Connected to Amazon DocumentDB: ${conn.connection.host}`);
  } catch (error) {
    console.error("DocumentDB connection error:", error);
    process.exit(1);
  }
};
