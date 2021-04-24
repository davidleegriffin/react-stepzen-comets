import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_METEORS_QUERY } from '../queries/getMeteors.js';
import { Container } from 'react-bootstrap';

import SearchLocation from '../components/SearchLocation';
import LocationMap from '../components/LocationMap';
import SpeedComparison from '../components/SpeedComparison';
import Footer from '../components/Footer';
import ImpactEnergy from '../components/ImpactEnergy';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const { data, loading, error } = useQuery(GET_METEORS_QUERY);

  useEffect(() => {
    if (loading === false && data) {
      console.log(data.comets);
      for (let i = 0; i < data.comets.length; i++) {
        if (!data.comets[i].lon && !data.comets[i].lat) {
          continue;
        } else {
          data.comets[i].lat =
            data.comets[i].latDir === 'N'
              ? +data.comets[i].lat
              : +data.comets[i].lat * -1;
          data.comets[i].lon =
            data.comets[i].lonDir === 'E'
              ? +data.comets[i].lon
              : +data.comets[i].lon * -1;
        }
      }
      setComets((state) => [...comets, ...data.comets]);
      // console.log(data.comets);
    }
  }, [loading, data]);

  if (loading)
    return (
      <div className="comets__loading--image">
        <p className="comets__loading--text">Almost there...</p>
      </div>
    );

  if (error) return <p>{error.message}</p>;

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
      <Container className="search-location-container">
        <SearchLocation
          setCurrentLocation={setCurrentLocation}
          currentLocation={currentLocation}
          onSubmit={onSubmit}
          setOnSubmit={setOnSubmit}
          setAverageVelocity={setAverageVelocity}
          setClosestComet={setClosestComet}
          comets={comets}
          setIsLoaded={setIsLoaded}
        />
        {averageVelocity ? (
          <>
            <LocationMap
              closestComet={closestComet}
              averageVelocity={averageVelocity}
              isLoaded={isLoaded}
            />
            <SpeedComparison
              closestComet={closestComet}
              averageVelocity={averageVelocity}
            />
            <ImpactEnergy
              closestComet={closestComet}
            />
          </>
        ) : null}
      </Container>
      <Footer />
    </>
  );
}
