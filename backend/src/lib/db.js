import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DOCUMENTDB_URI, {
      ssl: true,
      sslValidate: false, // Set to true if using a valid certificate
      tlsCAFile: "global-bundle.pem", // Path to the CA certificate file
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Amazon DocumentDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Amazon DocumentDB connection error:", error);
  }
};
