import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGO_URI



export const dbConnection = async () => {
  try {
         await mongoose.connect(URI)
         console.log("Connected to DB")
         
     } catch (error) {
         console.log("Error in connecting to DB")
         process.exit(0)
         
     }
};
