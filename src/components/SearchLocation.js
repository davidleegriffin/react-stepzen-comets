import { useState, useEffect } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { useQuery } from '@apollo/react-hooks';
import { GET_LOCATION_QUERY } from '../queries/getLocation';

import distance from '../utils/mathEquation'

export default function SearchLocation({ comets }) {
  const [onSubmit, setOnSubmit] = useState(true);
  const [sendAddress, setSendAddress] = useState('');
  const [currentLocation, setCurrentLocation] = useState({
    lat: '',
    lng: '',
  });
  const [closestComet, setClosestComet] = useState(null);
  const [averageVelocity, setAverageVelocity] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const containerStyle = {
    width: '508px',
    height: '300px'
  };

  const cardStyle = {
    width: '508px',
    height: '400px'
  };

const mapOptions = {
    disableDefaultUI: true
  }

  const { data, loading, error } = useQuery(GET_LOCATION_QUERY, {
    variables: { sendAddress },
    skip: onSubmit,
  });

  useEffect(() => {
    if (loading === false && data) {
      console.log(data.getLocation);
      setCurrentLocation((state) => data.getLocation);
      setOnSubmit(true);
    }
  }, [loading, data]);

  useEffect(() => {
    if (onSubmit) {
      findClosestComet();
    }
  }, [onSubmit]);



  if (error) return <p>{error.message}</p>;

  const search = (e) => {
    e.preventDefault();
    const loc = addressFormatter(sendAddress);
    setSendAddress((state) => loc);
    setOnSubmit(false);
  };

  const addressFormatter = (address) => {
    let newAddress = '';
    for (let i = 0; i < address.length; i++) {
      if (address[i] === ' ') {
        newAddress += '+';
      } else {
        newAddress += address[i];
      }
    }
    console.log(newAddress);
    return newAddress;
  };

  const findClosestComet = () => {
    let closest = null;
    let dist = Infinity;
    let totalVelocity = 0
    let count = 0
    for (let i = 0; i < comets.length; i++) {
      if (comets[i].vel && comets[i].vel !== '-') {
        totalVelocity += Number(comets[i].vel)
        count++
        // console.log(comets[i].vel)
      }
      if (!comets[i].lat || !comets[i].lon) continue;
      let currDistance = distance(
        currentLocation.lat,
        currentLocation.lng,
        comets[i].lat,
        comets[i].lon,
      );
      if (currDistance < dist) {
        dist = currDistance;
        closest = comets[i];
      }
    }
    setClosestComet(closest);
    let final = totalVelocity / count
    console.log(final)
    // console.log(comets.length)
    setAverageVelocity(final)
    setIsLoaded(true)
    console.log(closest);
  };

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

  if (loading) return <div className="comets__loading--image"><p className="comets__loading--text">Almost there...</p></div>
  
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
      {isLoaded && averageVelocity? (
        <Card style={cardStyle}>
          <Card.Header>PHEW! What a close call! {averageVelocity}</Card.Header>
          <Card.Body></Card.Body>
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              // options={mapOptions}
              mapContainerStyle={containerStyle}
              center={{
                lat: +closestComet.lat,
                lng: +closestComet.lon,
              }}
              zoom={10}
            >
              <Marker
                icon={"https://img.icons8.com/offices/30/000000/comet.png"}
                position={{
                  lat: +closestComet.lat,
                  lng: +closestComet.lon,
                }}
              />
            </GoogleMap>
          </LoadScript>
        </Card>
      ) : null}
      <a href="https://icons8.com/icon/Ybuo24ayiV2p/comet">Comet icon by Icons8</a>
    </Container>
  );
}
