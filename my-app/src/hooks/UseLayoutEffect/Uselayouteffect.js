import React, { useEffect, useLayoutEffect } from 'react'

const Uselayouteffect = () => {
    useLayoutEffect(()=>{
      console.log("Before the body renders");
      
    })
    useEffect(()=>{
      console.log("After the body renders");
      
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Uselayouteffect
