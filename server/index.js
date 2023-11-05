import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => {
    console.log(`Connected to Database `);
  })
  .catch((err) => {
    console.log(err, "Database not connected");
  });

const app = express();

app.listen(5000, () => {
  console.log("Server is running at port 3000");
});
