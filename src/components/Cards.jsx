import React from 'react'

const Cards = (props) => {
  return (
    <>
        <div className='inline-block bg-white text-black mx-10 my-10 px-2 py-2 rounded-2xl text-center'>
            <img src={props.url} className='h-32 w-32 rounded-full mb-3 my-3'></img>
            <h1>{props.name}</h1>
            <h1>Age {props.age}</h1>
            <h1>City:{props.city}</h1>
            <button className='bg-blue-400 rounded-2xl px-4 py-4 my-2'>Add Friend</button>
        </div>
    </>
  )
}

export default Cards