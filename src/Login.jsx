import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const nav=useNavigate()
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
     function LoginHanbler(e){
        e.preventDefault()
        let users=JSON.parse(localStorage.getItem("r_user"))
        let loggeduser=users.find((i)=>i.e==email && i.p==pass)
        if (loggeduser){
            nav("/")

        }

     }
    return (
    <div>
        <h1>login page</h1>
        <div className=' login-conatiner'> 
        <div className='login-child'>
            <form action="">
                <input type="email"  placeholder='email' onChange={(e)=>setemail(e.target.value)} required/><br />
                <input type="password"  placeholder='password'   onChange={(e)=>setpass(e.target.value)} required/><br />
                <button onClick={(e)=>LoginHanbler(e)}>Login</button>
            </form>

        </div>
    </div>
    </div>
  )
}

export default Login