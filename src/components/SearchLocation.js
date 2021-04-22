import { useState, useEffect, useRef } from 'react';
import {
  Form,
  Button,
  Container,
  Card,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

import { useQuery } from '@apollo/react-hooks';
import { GET_LOCATION_QUERY } from '../queries/getLocation';

import distance from '../utils/mathEquation';
import './searchLocation.css';

export default function SearchLocation({ comets }) {
  const [onSubmit, setOnSubmit] = useState(true);
  const [sendAddress, setSendAddress] = useState('');
  const [currentLocation, setCurrentLocation] = useState({
    lat: '',
    lng: '',
  });
  const [closestComet, setClosestComet] = useState(null);
  const [averageVelocity, setAverageVelocity] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const cometRef = useRef(null);

  const containerStyle = {
    width: '508px',
    height: '300px',
  };

  const cardStyle = {
    width: '508px',
    height: '400px',
  };

  const card2Style = {
    width: '1060px',
    height: '400px',
  };

  const cardSpeed = {
    backgroundImage: 'url(./images/background_road.jpeg)',
  };

  const mapOptions = {
    disableDefaultUI: true,
  };

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

  const findClosestComet = () => {
    let closest = null;
    let dist = Infinity;
    let totalVelocity = 0;
    let count = 0;
    for (let i = 0; i < comets.length; i++) {
      if (comets[i].vel && comets[i].vel !== '-') {
        totalVelocity += Number(comets[i].vel);
        count++;
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
      setClosestComet(closest);
      let final = totalVelocity / count;
      // console.log(final);
      // console.log(comets.length)
      setAverageVelocity(final);
      setIsLoaded(true);
      // console.log(closest);
    }
  };

  // if (loading)
  //   return (
  //     <div className="comets__loading--image">
  //       <p className="comets__loading--text">Almost there...</p>
  //     </div>
  //   );
  
  const activateTheComet = () => {
    cometRef.current.style.animationDuration = `${
      closestComet.vel
        ? 20 / +closestComet.vel
        : 20 / +averageVelocity
    }s`;
    cometRef.current.classList.add('flyingCometAnim');
  };

  const deactivateTheComet = () => {
    cometRef.current.classList.remove('flyingCometAnim');
  };

  return (
    <Container className='search-location-container'>
      <Form>
        <Form.Group controlId="formBasicEmail" className='form-container'>
          <Form.Label className='form-container-text'>Enter a location below</Form.Label>
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
        {/* <div className="button-container">
          <Button
            className="buttons"
            variant="warning"
            onClick={search}
            type="submit"
          >
            Submit
          </Button>
        </div> */}
      </Form>
      {isLoaded && averageVelocity ? (
        <>
          <Card style={cardStyle} className="comet__card cards">
            <Card.Header>PHEW! What a close call!</Card.Header>
            <LoadScript
              googleMapsApiKey={
                process.env.REACT_APP_GOOGLE_MAPS_API_KEY
              }
            >
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
                  icon={
                    'https://img.icons8.com/offices/30/000000/comet.png'
                  }
                  position={{
                    lat: +closestComet.lat,
                    lng: +closestComet.lon,
                  }}
                />
              </GoogleMap>
            </LoadScript>
          </Card>
          <Card style={card2Style} className="cards">
            <Card.Header>
              Compare this comets speed to the fastest man alive and
              the fastest car!
            </Card.Header>
            <Card.Body style={cardSpeed}>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id={`tooltip-right`}>
                    This comet travelled at:{' '}
                    <strong>
                      {closestComet.vel
                        ? +closestComet.vel
                        : +averageVelocity}{' '}
                      km/s
                    </strong>
                    .
                  </Tooltip>
                }
              >
                <div
                  ref={cometRef}
                  onAnimationEnd={deactivateTheComet}
                  className="flying-comet-container"
                >
                  <img
                    className="flying-comet"
                    src="./images/comet.png"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id={`tooltip-right`}>
                    Usain Bolt, the fastest man alive runs at:{' '}
                    <strong>10.44 m/s</strong>.
                  </Tooltip>
                }
              >
                <div className="running-man-container">
                  <img
                    className="running-man"
                    src="./images/runningMan.gif"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id={`tooltip-right`}>
                    2020 SSC Tuatara Hypercar, the fastest car in
                    existence gets up to speeds of:{' '}
                    <strong>141.31 m/s</strong>.
                  </Tooltip>
                }
              >
                <div className="driving-car-container">
                  <img
                    className="driving-car"
                    src="./images/car.png"
                  />
                </div>
              </OverlayTrigger>
            </Card.Body>
          </Card>
          <div className="button-container">
            <Button
              variant="warning"
              className="comet__button--card"
              onClick={activateTheComet}
            >
              Activate Comet
            </Button>
          </div>
        </>
      ) : null}
    </Container>
  );
}
