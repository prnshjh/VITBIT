import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000;


app.get("/api", authRoutes); 


app.listen(PORT, ()=>{
    console.log('server started at http://localhost:'+PORT);
    connectDB();
})