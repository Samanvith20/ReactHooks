import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'

export const Myapp=createContext()
const Usecontext = () => {
    const[Username,setUsername]=useState()
     
  return (
    <Myapp.Provider value={{Username, setUsername}}>
        <>
      <Login/>
      <User/>
      </>
    </Myapp.Provider>
  )
}

export default Usecontext