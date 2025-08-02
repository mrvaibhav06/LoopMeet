import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

// ✅ Load .env variables
dotenv.config();

// ✅ DEBUG: Check if MONGO_URI is correctly loaded
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors({
  origin: "https://loopmeet-video-call2.onrender.com", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
  try {
    const connectionDb = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
      console.log(`🚀 Server listening on port ${app.get("port")}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

start();
