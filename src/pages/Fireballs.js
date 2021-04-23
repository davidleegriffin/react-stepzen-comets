import {useState} from 'react'
import SearchLocation from "../components/SearchLocation"
import Comets from '../components/Comets'
import Footer from '../components/Footer'

import './Fireballs.css'

export default function Fireballs() {
  const [comets, setComets] = useState([])

  return (
    <>
      
      <div className='fireballs-header'>
        <img src={'./images/comet_crash.gif'} />
        <div class="head-text-container">
          <div class="head-text-background-color">
            <p className="comet__fireballs">Fireballs</p>
          </div>
      </div>
      </div>
      <Comets comets={comets} setComets={setComets}/>
      <SearchLocation comets={comets} />
      <Footer />
    </>
  )
}