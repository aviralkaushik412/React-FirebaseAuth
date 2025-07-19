import React, { useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'
import Signin from './Signin'
// import { auth } from "../firebase";

const SignUp = () => {
    const [email,setMail] = useState("")
  const [pass,setpass] = useState("")
  const [name,setName] = useState("")
  const submithandler =(e) =>{
    SignitUp()
    setMail('')
    setpass('')
    setName('')
    e.preventDefault()
  }

const SignitUp= async()=>{
  try{
    const userCred = await createUserWithEmailAndPassword(auth,email,pass);
    await updateProfile(userCred.user, {
      displayName:name,
    });
        await sendEmailVerification(userCred.user);
        await auth.currentUser.reload();
        console.log("User Created ", userCred.user.email)
    }catch(err){
        console.log("Signup Failed! ",err.message)
    }
}
  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg text-black">
  <h2 className="text-2xl font-semibold text-center mb-6">Create New Account</h2>

  <form onSubmit={submithandler} className="space-y-4">
    <input
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
      placeholder="Enter Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <input
      type="email"
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
      placeholder="Enter Email"
      value={email}
      onChange={(e) => setMail(e.target.value)}
    />

    <input
      type="password"
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
      placeholder="Enter Password"
      value={pass}
      onChange={(e) => setpass(e.target.value)}
    />

    <button
      type="submit"
      className="w-full bg-amber-400 hover:bg-amber-500 transition duration-300 text-white font-semibold py-2 rounded"
    >
      Submit
    </button>
    <Link to={'/Signin'}>
        <button  className=" mx-2 px-2 py-2 border-b-black border-1 text-sm text-black hover:underline mt-2">
          Already a User?
        </button>
      </Link>
  </form>
</div>

  )
}

export default SignUp