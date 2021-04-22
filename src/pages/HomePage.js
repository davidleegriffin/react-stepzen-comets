import {useState} from 'react'
import SearchLocation from "../components/SearchLocation"
import Comets from '../components/Comets'

import './HomePage.css'

export default function HomePage() {
  const [comets, setComets] = useState([])

  return (
    <>
      <h1>Fireballs</h1>
      <Comets comets={comets} setComets={setComets}/>
      <SearchLocation comets={comets} />
    </>
  )
}