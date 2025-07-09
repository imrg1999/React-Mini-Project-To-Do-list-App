import React from 'react'

const App = () => {
  return (
    <div>
      <h1 className='text-5xl text-center font-bold bg-blue-400 text-white p-10'>To-Do-List App</h1>

      <form action="" className='flex justify-center'>

        <input type="text" className='border-black text-2xl border-2 m-5 px-4 py-2' 
        placeholder='Enter The Task...'/>

        <input type="text" className='border-black text-2xl border-2 m-5 px-4 py-2' 
        placeholder='Enter The Description....'/>

        <button className='bg-black text-white px-4 py-2 m-5 font-bold border-2 rounded'>Add Task</button>
      </form>
    </div>
  )
}

export default App