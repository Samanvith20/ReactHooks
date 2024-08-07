import React from 'react'
import { useRef } from 'react'

const Useref = () => {
    const inputRef=useRef(null)
    const onchange=()=>{
        console.log(inputRef.current.value);
        inputRef.current.value=""
    }
  return (
    <div>
      <input type="text" placeholder='enter any thing' ref={inputRef}/>
      <button onClick={onchange}>Apply changes</button>
    </div>
  )
}

export default Useref
