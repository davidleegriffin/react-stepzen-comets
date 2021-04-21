import {useState} from 'react'
import {
  Form,
  Button,
  Container
} from 'react-bootstrap'

import { useQuery } from "@apollo/react-hooks"
import { GET_LOCATION_QUERY } from "../queries/getLocation"

const {
  REACT_APP_GOOGLE_MAPS_API_KEY,
} = process.env

export default function SearchLocation() {

  const [onSubmit, setOnSubmit] = useState(true)
  const [sendAddress, setSendAddress] = useState('')

  const {
    data,
    loading,
    error
  } = useQuery(GET_LOCATION_QUERY, {
    variables: { sendAddress },
    skip: onSubmit
  });

  if (error) return <p>{error.message}</p>
  if (data) {
    console.log(data)
  }

  const search = (e) => {
    e.preventDefault()
    const loc = addressFormatter(sendAddress)
    setSendAddress((state) => loc)
    setOnSubmit(false)
    // fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${sendAddress}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data['results'][0]['geometry']['location']))
  }

  const addressFormatter = (address) => {
    let newAddress = ''
    for (let i = 0; i < address.length; i++) {
      if (address[i] === ' ') {
        newAddress += '+'
      } else {
        newAddress += address[i]
      }
    }
    console.log(newAddress)
    return newAddress
  }
  
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter a location below</Form.Label>
            <Form.Control
              type="input"
              placeholder="Address"
              value={sendAddress}
              onChange={(e) => setSendAddress(e.target.value)}
            />
        </Form.Group>
        <Button onClick={search} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}