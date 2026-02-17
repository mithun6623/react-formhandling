
import "./Register.css"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate=useNavigate()
  const [email,setemail]=useState("")
    const [name,setname]=useState("")
    const [password,setpassword]=useState("")

    function registerHandlerFunction(e){
        e.preventDefault()

        let allUsers=JSON.parse(localStorage.getItem("r_user")) || []

        allUsers.push({'n':name,"e":email,"p":password})

        localStorage.setItem("r_user",JSON.stringify(allUsers))

        navigate("/login")

    

    }
  return (
    <div>
        <h1>Register page</h1>
        <div className='regis-container'>
        
        <div className='regis-child'>
            <form action="">
            <input type="text" placeholder='name'  onChange={(e)=>setname(e.target.value)} required/><br />
            <input type="email"  placeholder='email'  onChange={(e)=>setemail(e.target.value)} required/><br />
            <input type="password" placeholder='password'  onChange={(e)=>setpassword(e.target.value)}  required/><br />
            <button onClick={(e)=>registerHandlerFunction(e)}>Register</button>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Register