import {useState} from 'react'
import SearchLocation from "../components/SearchLocation"
import Comets from '../components/Comets'
import {
  Form,
  Button,
  Container
} from 'react-bootstrap'

export default function HomePage() {
  const [comets, setComets] = useState([])

  return (
    <>
      <h1> React StepZen Comets</h1>
      <Comets comets={comets} setComets={setComets}/>
      <SearchLocation comets={comets} />
    </>
  )
}
