import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase";


const SignUp = () => {
    const [email,setMail] = useState("")
  const [pass,setpass] = useState("")
  const submithandler =(e) =>{
    SignitUp()
    setMail('')
    setpass('')
    e.preventDefault()
  }

const SignitUp= async()=>{
    try{
        const userCred = await createUserWithEmailAndPassword(auth,email,pass);
        console.log("User Created ", userCred.user.email)
    }catch(err){
        console.log("Signup Failed! ",err.message)
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

export default SignUp