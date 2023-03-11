const mongoose = require('mongoose');

const uri = process.env.MONGO_DB_URI;

async function connectDB(){
    try {
        await mongoose.connect(uri);
        console.log(`Mongoose is connected to ${uri}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB;
