import React, { useState } from 'react'

function Input() {
    const [userName, setUserName] = useState("");
    const inputHandler = (e) => {
        console.log(e.target.value)
        setUserName(e.target.value)
    }
  return (
   <input type="text"
   name='userName' 
   value = {userName}
   placeholder='Enter username'
   onChange={inputHandler}
   
   />
  )
}

export default Input
