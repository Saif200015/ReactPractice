import React, { useState } from 'react'
import "./header.css"
const Header = () => {

  let temp='';
  const [count ,setCount]=useState(100);
  const [show,setShow] =useState(true);

  if(show){
    temp=<Card/>
  }else{
    temp=''
    
  }

  const handleAlert=()=>{
    alert("Learn Event handling")
  }

  const addData=(a,b)=>{
    console.log(a+b);
  }

  const check=()=>{
      setCount(count+1);
  }
  return (
    <div>
        <h1 className='demo'>
            Welcome to Header Section
        </h1>
          <div className='mb-4'>{temp}</div>

        <button className='bg-yellow-500 p-[10px] mb-4 mr-3' onClick={handleAlert}>Click Me</button>

        <button className='bg-red-300 p-[10px] mb-4 mr-3' onClick={()=>addData(40,30)}>Add data</button>

        <button className='bg-pink-800 p-[10px] mb-4 ' onClick={()=>check()}>State Checking</button>
        <div className='font-bold text-4xl'>{count}</div>
    </div>
  )
}

export default Header


let Card=()=>{
  return(
    <h1 className='font-bold text-2xl'>Welcome to code...</h1>
  )
}