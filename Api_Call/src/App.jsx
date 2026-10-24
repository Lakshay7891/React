import React from 'react'
import axios from 'axios'

const App = () => {

  localStorage.clear()
  sessionStorage.clear()

// Usimg fetch method.

const getData = async()=>{
  const response = await fetch('https://picsum.photos/v2/list?page=2&limit=100')
  const data = await response.json()
  console.log(data);




// Using axios method.
const getData = async()=>{
  const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
  console.log(response);
  
}

  return (
    <div className='h-screen w-full text-center'>
      <h1 className='text-white text-4xl uppercase bg-red-500 px-10'>Welcome to api calling in React</h1>
      <button onClick={getData} className='bg-green-400 text-white m-5'>Get Data</button>
    </div>
  )
}

export default App
