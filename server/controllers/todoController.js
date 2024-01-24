const todoModel = require("../models/todoModel");


// get All Data Function 
const getAllToDo = async(req,res) =>{
try {
    const myData  = await todoModel.find({})
    if(!myData){
        return res.status(404).send({
            success:false,
            message:"my todo not found"
        })
    }
    res.status(200).send({
        success:true,
        message:"Get All My Todo",
        totalToDo:myData.length,
        myData
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"Error in get all to Do Api "
    })
}  
}

// get Single persons data 
const getSingleToDo = async(req,res) =>{
   try {
    const mySingleToDo = await todoModel.findById({email})
    if(!mySingleToDo){
        return res.status(404).send({
            success:false,
            message:"my single todo not found",
        })
    }
    res.status(200).send({
        success:true,
        message:"Get My single Todo",
    })
   } catch (error) {
    res.status(500).send({
        success:false,
        message:"Error in get single to Do Api "
    })
   }
}
//    create to do data 
const createToDo= async(req,res) =>{
   try {
    const {name,title,description} = req.body;
    if(!name || !title || !description){
        return res.status(404).send({
            success:false,
            message:"Please Provide all Fields",
        })
    }
    const createToDo = await todoModel.create({
        name,title,password
    })
    createToDo.save();
    res.status(201).send({
        success:true,
        message:"My TODO Created Successfully",

    })
   } catch (error) {
    res.status(500).send({
        success:false,
        message:"Error in create to Do Api "
    })
   }
}
//  update to do Function 
const updateToDo= async(req,res) =>{
 try {
    const {name,title,description} = req.body;
    const {id} = req.params;
    const updateMyTodo = await todoModel.findByIdAndUpdate(
        id,
        {name,title,description}
         
    )
  res.status(200).send({
    success:true,
    message:'My TODo List is Updated'
  })
 } catch (error) {
    res.status(500).send({
        success:false,
        message:"Error in update to Do Api "
    })
 }
}
//   delete function 
const deleteToDo= async(req,res) =>{
try {
    const {id} = req.params;
    
} catch (error) {
    res.status(500).send({
        success:false,
        message:"Error in delete to Do Api "
    })
}
}

module.export = {getAllToDo,getSingleToDo,createToDo,updateToDo,deleteToDo}