import { Card } from 'react-bootstrap';
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

import './LocationMap.css';

export default function LocationMap({
  closestComet,
  isLoaded,
}) {
  const containerStyle = {
    width: '506px',
    height: '300px',
  };

  const cardStyle = {
    width: '508px',
    height: '400px',
  };

  const mapOptions = {
    disableDefaultUI: true,
  };

  return (
    <Card
      bg="warning"
      style={cardStyle}
      className="comet__card cards"
    >
      {isLoaded ? (
        <>
          <Card.Header>Comet Location: (PHEW that was close!) </Card.Header>
          <LoadScript
            googleMapsApiKey={
              process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            }
          >
            <GoogleMap
              // options={mapOptions}
              mapContainerStyle={containerStyle}
              center={{
                lat: closestComet.lat,
                lng: closestComet.lon,
              }}
              zoom={6}
            >
              <Marker
                icon={
                  'https://img.icons8.com/offices/30/000000/comet.png'
                }
                position={{
                  lat: closestComet.lat,
                  lng: closestComet.lon,
                }}
              />
            </GoogleMap>
          </LoadScript>
        </>
      ) : (
        <div style={containerStyle}> Map Loading...</div>
      )}
    </Card>
  );
}
