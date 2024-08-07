import React, { useContext } from 'react'
import { Myapp } from './Usecontext';


const User = () => {
   const {Username}=useContext(Myapp)
   
  return (
    <div>
      User:{Username}
    </div>
  )
}

export default User
