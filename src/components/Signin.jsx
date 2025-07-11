import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";
const Signin = () => {
  const [email,setMail] = useState("")
  const [pass,setpass] = useState("")
  const submithandler =(e) =>{
    HandelLogin()
    setMail('')
    setpass('')
    e.preventDefault()
  }

  const HandelLogin= async ()=>{
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, pass);
      console.log("Logged in as:", userCred.user.email);
    } catch (err) {
      console.error("Login failed:", err.message);
    }
  }
  return (
    <form onSubmit={submithandler} className='bg-white border-amber-400 text-black'>
      <input className=' border-2' placeholder='Enter Email' value={email} onChange={(e)=>{
        setMail(e.target.value)
      }}>
      </input>
      <input className=' border-2' placeholder='Enter Password' value={pass} onChange={(e)=>{
        setpass(e.target.value)
      }}>
      </input>
      <button className=' px-3 py-2 border-2 rounded'>
        Submit
      </button>
    </form>
  )
}

export default Signin