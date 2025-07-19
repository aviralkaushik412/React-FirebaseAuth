import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../firebase'

// signInWithPopup

const GoogleAuth =  () => {
    const loginHandler = async ()=>{
        try{
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({
                prompt: "select account"
            })
            await signInWithPopup(auth,googleProvider);
        }catch(err){
            console.log(err.message);
        }
    }
  return (
    <div>
        <button onClick={loginHandler} className='bg-blue-500 px-2 py-2 mx-2 my-2 hover:bg-indigo-500 cursor-pointer'>
            SignIn with Google
        </button>
    </div>
  )
}

export default GoogleAuth