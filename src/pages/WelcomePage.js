import React, {useState} from 'react'
import SearchLocation from "../components/SearchLocation"
import Comets from '../components/Comets'
import Footer from '../components/Footer'
import HomePage from './HomePage'
// import './HomePage.css'

export default function WelcomePage() {
//   const [comets, setComets] = useState([])

  return (
    <>
      <h1>WELCOME</h1>
      <navlink to="/HomePage">Home Page</navlink>
    </>
  )
}