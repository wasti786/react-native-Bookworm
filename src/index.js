import express from "express";
import cors from "cors";
import "dotenv/config"


import authRoutes from "./Routes/authRoutes.js"
import bookRoutes from "./Routes/bookRoutes.js"

import { connectDB } from "./lib/db.js";

const app=express();
const PORT= process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/books",bookRoutes);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})
