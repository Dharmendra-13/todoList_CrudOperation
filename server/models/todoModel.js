const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'name is required']
    },
    title:{
        type:String,
        required:[true, 'title is required']
    },
    description:{
        type:String,
        required:[true, 'description is required']
    },
},)
const todoModel = mongoose.model("TODO",todoSchema);
module.exports = todoModel;