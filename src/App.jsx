import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cards from "./components/Cards"
import axios from 'axios'
import {Navigate, Route, Routes, UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from "react-router-dom"
import About from './pages/About'
import Home from "./pages/Home"
import Signin from "./components/Signin"
import SignUp from "./components/SignUp"
import {useAuth} from "./context/AuthContext"
import Contact from "./pages/Contact"
import Product from "./pages/Product"


const App=()=>{
  // var name = "Aviral"
  const users = [
  {
    "name": "Aarav Mehta",
    "age": 24,
    "city": "Mumbai",
    "profilePic": "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    "name": "Isha Sharma",
    "age": 22,
    "city": "Delhi",
    "profilePic": "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    "name": "Rohan Patel",
    "age": 26,
    "city": "Ahmedabad",
    "profilePic": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "name": "Sneha Reddy",
    "age": 23,
    "city": "Hyderabad",
    "profilePic": "https://randomuser.me/api/portraits/women/58.jpg"
  },
  {
    "name": "Karan Verma",
    "age": 25,
    "city": "Bangalore",
    "profilePic": "https://randomuser.me/api/portraits/men/48.jpg"
  }
]

  const [name, setName] = useState('')
  // const [num,setn] = useState(0)
  // const change = () => {
  //   setName("Aviral Kaushik")
  // }
  // const inc = ()=>{
  //   setn(num+1)
    
  // }
  // const dec = ()=>{
  //   setn(num-1)
  // }
  const submithandler =(e) =>{
    console.log("hello !",name)
    setName('')
    e.preventDefault()
  }
  // users.forEach(function(elem){
  //   console.log(elem);
  // })
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  
  return (
    // <div>
    //   {/* <h1 className="text-xl">hello {name}</h1>
    //   <h1> {num}</h1>
    //   <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" onClick={change}>change user</button>
    //   <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" onClick={inc}>increment</button>
    //   <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700" onClick={dec}>decrement</button> */}

    //   <form onSubmit={submithandler}>
    //     <input 
    //     value={name}
    //     onChange={(e)=>{
    //       setName(e.target.value)
    //     }}
    //     className="mx-5 my-5 px-2 py-2 rounded bg-sky-900 " 
    //     type="text"
    //     placeholder="Enter Text">
    //     </input>
    //     <button className="mx-5 my-5 px-2 py-2 rounded bg-black" >Submit</button>
    //   </form>
    // </div>
    <>
    {/* <Navbar user = {user}/>
    <div className="p-10 mx-10 my-10">
      <div>
        {users.map(function(elem,idx){
          return <Cards key={idx} name={elem.name} age={elem.age} url={elem.profilePic} city={elem.city}/>
        })}
      </div>
    </div>
    <Footer/> */}
    {/* <button onClick={()=>{
      // getData();
    }}
      className="bg-black text-white px-3 py-3 rounded-2xl mx-3 text-2xl my-3 active:scale-90">Get Data
     </button>
     <div className="bg-cyan-900 text-white px-4 py-10">
      {data.map(function(elem,idx){
        return <Cards key={idx} url = {elem.download_url} name = {elem.author}/>
      })}
     </div> */}
     
<Navbar user={user?.email} ></Navbar>
      {/* <Signin></Signin>
      <SignUp></SignUp> */}
      
    <div>
       <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/signin" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signin" element={!user ? <Signin /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
      </Routes>
    </div>
<Footer></Footer>
    </>
  )
}

export default App

