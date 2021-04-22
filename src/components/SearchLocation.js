import {useState, useEffect} from 'react'
import {
  Form,
  Button,
  Container,
  Card
} from 'react-bootstrap'

import { useQuery } from "@apollo/react-hooks"
import { GET_LOCATION_QUERY } from "../queries/getLocation"

export default function SearchLocation({comets}) {

  const [onSubmit, setOnSubmit] = useState(true)
  const [sendAddress, setSendAddress] = useState('')
  const [currentLocation, setCurrentLocation] = useState({ lat: '', lng: '' })
  const [closestComet, setClosestComet] = useState(null)

  const {
    data,
    loading,
    error
  } = useQuery(GET_LOCATION_QUERY, {
    variables: { sendAddress },
    skip: onSubmit
  });

  useEffect(() => {
    if (loading === false && data) {
      console.log(data.getLocation)
      setCurrentLocation((state) => data.getLocation)
      setOnSubmit(true)
      findClosestComet()
    }
  }, [loading, data])

  if (error) return <p>{error.message}</p>

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

  const findClosestComet = () => {
    //comets[0].lat and comets[0].lon
    let closest = null
    let dist = Infinity
    for (let i = 0; i < comets.length; i++) {
      if (!comets[i].lat || !comets[i].lon) continue;
      let currDistance = distance(currentLocation.lat, currentLocation.lng, comets[i].lat, comets[i].lon)
      // console.log(currDistance)
      if ( currDistance < dist) {
        dist = currDistance
        closest = comets[i]
      }
    }
    // console.log(dist)
    setClosestComet(state => closest)
    console.log(closest)
  }

  function distance(lat1, lon1, lat2, lon2) {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      
      return dist;
    }
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
      {closestComet
        ?
        <Card>
          <Card.Body>Lat: {closestComet.lat}</Card.Body>
        </Card>
        :
        null
      }
    </Container>
  )
}