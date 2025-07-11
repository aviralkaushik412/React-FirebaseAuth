import React from 'react'
import { useEffect, useState } from "react"
import Cards from "../components/Cards"
import axios from 'axios'
const Home = () => {

    const [data,setData] = useState([])
  const getData= async ()=>{
    // console.log("hello");
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    // console.log(response.data);
  }
  // getData();
  // const oclick=()=>{
  //   setData(response.data)
  // }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
     <div className="bg-cyan-900 text-white px-4 py-10">
      {data.map(function(elem,idx){
        return <Cards key={idx} url = {elem.download_url} name = {elem.author}/>
      })}
     </div>
    </>
  )
}

export default Home