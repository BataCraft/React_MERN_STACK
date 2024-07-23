import React, { useState } from 'react'



// Syntax
// const [state, setState] = useState(initialState);

function Counter() {
    const [count, setCount] = useState(0)
    
    
  return (
   <>
   <button className='btn btn-danger' onClick={decrement}>-</button>
   <h1>{count}</h1>

   <button className='btn btn-success' onClick={increment}>+</button>
   
   
   </>
  )
}

export default Counter