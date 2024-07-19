import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://barath:652003@cluster0.0k0pr36.mongodb.net/hari').then (()=>console.log("Db connected"));
}