import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constant.js";
dotenv.config();


console.log("Connecting to MongoDB...");

const connectDB = async () => {

    try {

        const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected ! ! DB host:${connectionIntance.connection.host}`);

    } catch (error) {
        console.log(error, "MongoDB connection error");
        process.exit(1);

    }

}

export default connectDB;