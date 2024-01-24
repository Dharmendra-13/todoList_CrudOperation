import React from 'react'
import "./ToDoItems.css"
function ToDoItems({name,title,description,deleteHandler,index}) {
  return (
    <>
    <div className='prop-main'>
        <h5>Name : {name}</h5>
        <h5>Title : {title}</h5>
        <h6>Description :{description}</h6>
         <div className='edit-btn'>  
             <button className='btn'>Edit</button>
             <button className='btn' onClick={()=>deleteHandler(index)}> Remove</button>
         </div>
    </div>
    </>
  )
}

export default ToDoItems