import React, { useState } from 'react'
import './state.css'

const Usestate = () => {
    const[Inputvalue,setInputvalue]=useState("Hello world")
    let Updatevalue=(event)=>{
          let Changedvalue=event.target.value
          setInputvalue(Changedvalue)
    }
  return (
    <div className="usestate-container">
      <input type="text" placeholder="Enter something" onChange={Updatevalue} />
      <div className="input-value">{Inputvalue}</div>
    </div>
  )
}

export default Usestate