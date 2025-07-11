import React, { useContext } from 'react'
import { dataContext } from '../context/UserContext'

const About = () => {
    const data = useContext(dataContext)
    console.log(data)
  return (
    <div>About me</div>
  )
}

export default About