import {useState} from 'react'
import SearchLocation from "../components/SearchLocation"
import Comets from '../components/Comets'

import './HomePage.css'

export default function HomePage() {
  const [comets, setComets] = useState([])

  return (
    <>
<<<<<<< HEAD
      <h1>Fireballs</h1>
=======
      <h1> React StepZen Comets</h1>
>>>>>>> cbd65f183663cce73cf6532512cca1685cf8c4b0
      <Comets comets={comets} setComets={setComets}/>
      <SearchLocation comets={comets} />
    </>
  )
}
