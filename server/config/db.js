const mongoose = require("mongoose");
const colors = require("colors")

const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log(`database is connected`.bgGreen.white)
    } catch (error) {
       console.log(`Error in connection db ${error}`) 
    }
}

module.exports = connectDb;