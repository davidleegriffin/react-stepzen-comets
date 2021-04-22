import {useState} from 'react'
import SearchLocation from "../components/SearchLocation"
import Comets from '../components/Comets'
import Footer from '../components/Footer'

import './HomePage.css'

export default function HomePage() {
  const [comets, setComets] = useState([])

  return (
    <>
      <div className='fireballs-header'>
        <img src={'./images/comet_crash.gif'}/>
        <h1>Fireballs</h1>
      </div>
      <Comets comets={comets} setComets={setComets}/>
      <SearchLocation comets={comets} />
      <Footer />
    </>
  )
}
