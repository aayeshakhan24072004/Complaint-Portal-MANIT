
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Mongo URI:", process.env.MONGO_URI);  // Add this line to debug
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected Successfully`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
