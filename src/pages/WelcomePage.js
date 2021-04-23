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
        <div className="fireballs__container--main">
            <h1>WELCOME TO FIREBALLS</h1>
            <p classname="fireballs__image--example"><img src="./images/fireballs-screen-shot.png" alt="fireballs-screen-shot" width="90%"></img></p>
            <NavLink to={{pathname: "/fireballs"}}>
                <button className="fireballs__button--home">CLICK HERE TO START</button>
            </NavLink>
            <Footer />
        </div>
    </>
  )
}