import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_METEORS_QUERY } from '../queries/getMeteors.js';
import {Container} from 'react-bootstrap'

import SearchLocation from '../components/SearchLocation';
import LocationMap from '../components/LocationMap';
import SpeedComparison from '../components/SpeedComparison';
import Footer from '../components/Footer';
import distance from '../utils/mathEquation';

import './Fireballs.css';

export default function Fireballs() {
  const [onSubmit, setOnSubmit] = useState(true);
  const [currentLocation, setCurrentLocation] = useState({
    lat: '',
    lng: '',
  });
  const [closestComet, setClosestComet] = useState(null);
  const [comets, setComets] = useState([]);
  const [averageVelocity, setAverageVelocity] = useState(0);
  const { data, loading, error } = useQuery(GET_METEORS_QUERY);

  useEffect(() => {
    if (loading === false && data) {
      setComets((state) => [...comets, ...data.comets]);
      console.log(comets);
    }
  }, [loading, data]);

  if (loading)
    return (
      <div className="comets__loading--image">
        <p className="comets__loading--text">Almost there...</p>
      </div>
    );

  if (error) return <p>{error.message}</p>;

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
      // console.log(closest);
    }
  };

  return (
    <>
      <img
        src="./images/starry_sky_background.jpeg"
        id="background-image"
        alt="starry sky"
      ></img>
      <div className="fireballs-header">
        <img src={'./images/comet_crash.gif'} />
        <div class="head-text-container">
          <div class="head-text-background-color">
            <p className="comet__fireballs">Fireballs</p>
          </div>
        </div>
      </div>
      <Container className='search-location-container'>
      <SearchLocation
        setCurrentLocation={setCurrentLocation}
        onSubmit={onSubmit}
        setOnSubmit={setOnSubmit}
        findClosestComet={findClosestComet}
      />
      <LocationMap
        closestComet={closestComet}
        averageVelocity={averageVelocity}
      />
      <SpeedComparison
        closestComet={closestComet}
        averageVelocity={averageVelocity}
        />
        </Container>
      <Footer />
    </>
  );
}
