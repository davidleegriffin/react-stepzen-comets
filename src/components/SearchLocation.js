import { useState, useEffect } from 'react';
import {
  Form,
  Button,
} from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { GET_LOCATION_QUERY } from '../queries/getLocation';

import distance from '../utils/mathEquation';
import './searchLocation.css';

export default function SearchLocation({
  setCurrentLocation,
  currentLocation,
  onSubmit,
  setOnSubmit,
  // findClosestComet,
  setAverageVelocity,
  setClosestComet,
  comets
}) {
  const [sendAddress, setSendAddress] = useState('');

  const { data, loading, error } = useQuery(GET_LOCATION_QUERY, {
    variables: { sendAddress },
    skip: onSubmit,
  });

  useEffect(() => {
    if (loading === false && data) {
      // console.log(data.getLocation);
      setCurrentLocation(data.getLocation);
      setOnSubmit(true);
    }
  }, [loading, data]);


  useEffect(() => {
    if (currentLocation.lat.length > 0 && currentLocation.lng.length > 0) {
      console.log(currentLocation)
      findClosestComet();
    }
  }, [currentLocation]);

  const findClosestComet = () => {
    // console.log('RUNNING!')
    let closest = {};
    let dist = Infinity;
    let totalVelocity = 0;
    let count = 0;
    // console.log(comets)
    for (let i = 0; i < comets.length; i++) {
      if (comets[i].vel && comets[i].vel !== '-') {
        totalVelocity += Number(comets[i].vel);
        count++;
        // console.log(Number(currentLocation.lat))
        // console.log(Number(currentLocation.lng))
      }
      if (!comets[i].lat || !comets[i].lon) continue;

      comets[i].lat = comets[i].latDir === "N" ? Number(comets[i].lat) : Number(comets[i].lat * -1)
      comets[i].lon = comets[i].lonDir === "E" ? Number(comets[i].lon) : Number(comets[i].lon * -1)
      let currDistance = distance(
        Number(currentLocation.lat),
        Number(currentLocation.lng),
        comets[i].lat,
        comets[i].lon,
      );
      if (currDistance < dist) {
        // console.log(dist)
        dist = currDistance;
        closest = comets[i]
      }
      // console.log(final);
      // console.log(comets.length)
      // console.log(closest);
    }
    console.log(closest)
    let final = totalVelocity / count;
    setAverageVelocity(final);
    setClosestComet(closest)
    // setCurrentLocation({
    //   lat: '',
    //   lng: '',
    // })
  };

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
    // console.log(newAddress);
    return newAddress;
  };

  return (
    <Form>
      <Form.Group
        controlId="formBasicEmail"
        className="form-container"
      >
        <Form.Label className="form-container-text">
          Enter a location below
        </Form.Label>
        <Form.Control
          style={{ width: '508px', marginBottom: '5px' }}
          type="input"
          placeholder="Address"
          value={sendAddress}
          onChange={(e) => setSendAddress(e.target.value)}
        />
        <Button
          className="buttons"
          variant="warning"
          onClick={search}
          type="submit"
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
