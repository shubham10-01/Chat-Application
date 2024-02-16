const mongoose = require("mongoose");
// const colors = require("colors");

const connectDB = async() => {
    try{
        const conn = await mongoose.connect("mongodb+srv://chat-app:5Pc2poAyqmjAc1Kw@cluster0.5h5uzsj.mongodb.net/");
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
}

module.exports = connectDB;