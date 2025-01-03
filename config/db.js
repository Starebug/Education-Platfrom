const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log(`MongoDB connected: ${connection.connection.host}`);
    }catch(error) {
        console.log("Error connecting to database", error);
    }
}
module.exports = {connectDB};