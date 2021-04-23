import React, {useState, setState} from 'react'
import { NavLink, Link, Route, Redirect, useHistory, Switch } from 'react-router-dom';
import SearchLocation from "../components/SearchLocation"
import Comets from '../components/Comets'
import Footer from '../components/Footer'
import Fireballs from './Fireballs'
import './WelcomePage.css'

export default function WelcomePage() {
//   const [comets, setComets] = useState([])


  return (
    <>
      <h1>WELCOME</h1>
      <NavLink to={{pathname: "/fireballs"}}>
        <button>HOME</button>
      {/* <Route path="/home" component={HomePage} /> */}
      </NavLink>
    </>
  )
}