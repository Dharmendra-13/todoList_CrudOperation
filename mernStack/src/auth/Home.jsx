import React,{useState} from 'react'
import ToDoItems from '../components/ToDoItems'
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data,setData] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault();

     setData([...data,{name,title,description}])
              setName("")
              setTitle("")
              setDescription("")

}
const deleteHandler = (index) =>{
  const deleteData = data.filter((item,i)=>(
          i !== index
  ))
  setData(deleteData)
}
  return (
    <>
   <h2 className='heading'>My To Do List</h2>
  <div className='form-data'>
  <form onSubmit={handleSubmit}> 
    <input type="text" placeholder='enter youe name' value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="text" placeholder='enter youe title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    <input type="text" placeholder='enter youe description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
    <button>Add</button>
</form>
   {
    data.map((items,index)=>(

        <ToDoItems 
        key={index}
        name={items.name}
        title={items.title}
        description={items.description}
        deleteHandler={deleteHandler} 
        index={index}
        />
    ))
   }
  </div>




    </>
  )
}

export default Home