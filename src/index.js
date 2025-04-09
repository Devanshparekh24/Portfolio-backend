import connectDB from "./db/index.js";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

connectDB()

    .then(() => {
        app.listen(process.env.PORT ||5000, () => {
            console.log(`🪄  Server is running on port ${process.env.PORT}`);
        });
    }).catch((error) => {
        console.log("❌ MongoDB connection error", error);


    })
