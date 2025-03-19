import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 5555;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to bookstore!");
});

app.use("/books", booksRoute);

app.listen(PORT, () => {
  console.log("server is running on http://localhost:" + PORT);

  connectDB();
});
