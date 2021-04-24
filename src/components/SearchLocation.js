import { useState, useEffect } from 'react';
import {
  Form,
  Button,
} from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { GET_LOCATION_QUERY } from '../queries/getLocation';

import './searchLocation.css';

export default function SearchLocation({
  setCurrentLocation,
  onSubmit,
  setOnSubmit,
  findClosestComet
}) {
  const [sendAddress, setSendAddress] = useState('');

  const { data, loading, error } = useQuery(GET_LOCATION_QUERY, {
    variables: { sendAddress },
    skip: onSubmit,
  });

  useEffect(() => {
    if (loading === false && data) {
      // console.log(data.getLocation);
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
