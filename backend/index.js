import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { courseRoutes } from "./routes/courseRoutes.js";
import { adminRoutes } from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

const corsOptions = {
  //   origin: "",
  Credential: true,
};

app.use(express.json());

app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  res.json({
    message: "Welcome to Backend",
  });
});

//user routes
app.use("/api/v1/user", userRoutes);
//course routes
app.use("/api/v1/courses/", courseRoutes);
//
app.use("/api/v1/admin", adminRoutes);

const port = process.env.PORT || 4080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

connectDB();
