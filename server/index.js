import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./router/user.route.js"
import authRouter from "./router/auth.router.js"
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => {
    console.log(`Connected to Database `);
  })
  .catch((err) => {
    console.log(err, "Database not Connected");
  });

const app = express();
app.use(express.json())
app.use(cookieParser())

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});


app.use("/api/user/",userRoute)

app.use("/api/auth/",authRouter) 



app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server Error"

  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})
