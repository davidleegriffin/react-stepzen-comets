import React, {useState, setState} from 'react'
import { NavLink, Link, Route, Redirect, useHistory, Switch } from 'react-router-dom';
import SearchLocation from "../components/SearchLocation"
import Comets from '../components/Meteors'
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
            <div>
                <p className="fireballs__explainer">
                    This site is dedicated to tracking meteors using NASA's JPL Fireballs API to generate an array of Meteor objects. 
                    We then ask the user to input a location in the box and hit submit button. The app will then compare the users 
                    entered location to query Google maps API and generate longitude and latitude coordinates that can then be compared 
                    to the array of meteors to find the closest recent meteor strike and obtain the meteors velocity, if no velocity on 
                    file, an average of all velocities of recent meteors is generated and the actual or averaged velocity is then compared 
                    to the velocities of the fastest human and the fastest car.
                </p>
            </div>
            <NavLink to={{pathname: "/fireballs"}}>
                <button className="fireballs__button--home">CLICK HERE TO START</button>
            </NavLink>
            
        </div>
    </>
  )
}