import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect hook is Start")
    })

  return (
    <div>
        <h2>Count -{count}</h2>
        <button onClick={()=> {
            setCount(prev => prev + 1)
        }}> Increase</button>
    </div>
  )
}

export default UseEffectHook
