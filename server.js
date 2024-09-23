import express from "express"
import mongoose from "mongoose"
import  dotenv from "dotenv";
import multer from "multer";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"
import sequelize from "./configs/db.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/users',userRoutes)
app.use("/api/auth",authRoutes)

sequelize.sync().then(()=>{
    console.log("Database Synced")
}).catch((err) => {
    console.log("Unable to sync database",err)
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to Port ${process.env.PORT}`)
})