import {useState} from 'react'
import SearchLocation from "../components/SearchLocation"
import {
  Form,
  Button,
  Container
} from 'react-bootstrap'

export default function HomePage() {
  const [location, setLocation] = useState('')
  const search = (e) => {
    e.preventDefault()

  }
  return (
    <>
      <h1>StepZen React Tutorial</h1>
      <SearchLocation />
    </>
  )
}