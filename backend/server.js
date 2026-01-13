import cors from "cors";
import "dotenv/config";
import e from "express";
import { clerkMiddleware } from "@clerk/express";
import { connectDB } from "./config/db.js";

const app = e();
const port = process.env.PORT;

// MIDDLEWARES
app.use(cors());
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(clerkMiddleware());

// DB
connectDB();

// ROUTES

// APP PORT AND LISTEN
app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
