import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// imports are here
import scrapRoute from "./routes/scrap.route.js";

//declarations are here
app.use("/api", scrapRoute);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Backend is running on port ${PORT}`);
});
