const express = require('express');
const {getAllToDo,getSingleToDo,createToDo,updateToDo,deleteToDo} =require("../controllers/todoController")
const router = express.Router();

// get all to do || get
router.get("/getAllToDo",getAllToDo)

// get single ToDo || get
router.get("/get/:id",getSingleToDo)

// create to do || post 
router.post("/create-todo",createToDo)

// update to do || put 
router.put("/update-todo",updateToDo)

// delete todo || delete 
router.delete("/delete-todo",deleteToDo)