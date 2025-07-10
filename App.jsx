import React, { useState } from 'react'

const App = () => {
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState(""); 
  const[mainTask, setMainTask] = useState([]);
  
  const submitHandler =(e) => {
    e.preventDefault();
    setMainTask([...mainTask, {title, description}]);
    setTitle("");
    setDescription("");
  }

  const deleteHandling = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index,1);
    setMainTask(copyTask);
  }

  let renderTask;
  if(mainTask.length === 0) {
    renderTask = <h1>No Tasks assigned!</h1> } 
    else { renderTask = mainTask.map((task, index)=> {
      return (
      <li key={index}>
        <div className='flex justify-between w-2/3'>
        <h5 className='text-2xl font-bold'>{task.title}</h5>
        <h6 className='text-xl font-bold'>{task.description}</h6>
        <button className='bg-blue-800 text-white px-2 py-2 m-1 rounded' onClick={(index)=>{deleteHandling(index)}}>Delete</button>
        </div>
      </li>)
    })}
  return (
    <div>
      <h1 className='text-5xl text-center font-bold bg-blue-400 text-white p-10'>To-Do-List App</h1>

      <form action='' className='flex justify-center' onSubmit={submitHandler}>

        <input type="text" className='border-black text-2xl border-2 m-5 px-4 py-2' 
        placeholder='Enter The Task...'  onChange={(e)=> setTitle(e.target.value)} value={title}/>

        <input type="text" className='border-black text-2xl border-2 m-5 px-4 py-2' 
        placeholder='Enter The Description....'  onChange={(e)=> setDescription(e.target.value)} value={description}/>

        <button className='bg-blue-800 text-white px-4 py-2 m-5 font-bold border-2 rounded'>Add Task</button>
      </form>
      <div className='p-8 bg-blue-200 text-center'>
        <ul>{renderTask}</ul>
      </div>
    </div>
  )
}

export default App