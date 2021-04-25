import { Carousel, Container } from 'react-bootstrap';

import './ImpactEnergy.css';

export default function ImpactEnergy({ closestComet }) {
  function boxerCalc(energy) {
    return Math.round(+energy / 2.3900574e-10).toLocaleString();
  }

  function candyCalc(energy) {
    return Math.round(+energy / 2.86806883e-7).toLocaleString();
  }

  function reactorCalc(energy) {
    return Math.round(+energy / 0.00834608333);
  }

  return (
    <Container className="impact-container">
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <div className="carousel-image-1-holder">
            <img
              className="carousel-image-1"
              src="./images/punching_bag_2.gif"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3 className="carousel-header">Professional Boxer (1000 Joules)</h3>
            <p className="carousel-text">
              would have to hit a punching bag{' '}
              {boxerCalc(closestComet.impactE)} times to generate the
              same energy as this fireball.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="carousel-image-2-holder">
            <img
              className="carousel-images carousel-image-2"
              src="./images/candy_bar.gif"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3 className="carousel-header">Candy Bar (280 food calories)</h3>
            <p className="carousel-text">
              would have to eat {candyCalc(closestComet.impactE)} candy bars
              to generate the same energy as this fireball
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-3-holder">
            <img
              className="carousel-image-3"
              src="./images/nuclear_1.gif"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
          <h3 className="carousel-header">Nuclear Power Plant (582 mwh)</h3>
            <p className="carousel-text">
              would take {reactorCalc(closestComet.impactE)} minutes
              to generate the same energy as this fireball
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
