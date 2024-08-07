import React, { useContext } from 'react'
import { Myapp } from './Usecontext'

const Login = () => {
    const { setUsername } = useContext(Myapp)
    return (
        <div>
            <input 
                onChange={(event) => {
                    setUsername(event.target.value)
                }} 
            /> 
        </div>
    )
}

export default Login