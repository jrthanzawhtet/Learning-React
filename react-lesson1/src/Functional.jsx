import React, { useState } from 'react'



function Functional() {
    const [count , setCount] = useState(0);
    function addHandler(){
        setCount (count + 1);
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={addHandler}>Add 1</button>
    </>
  )
}

export default Functional
