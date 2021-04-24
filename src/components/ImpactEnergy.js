import { Card, Carousel, Container } from 'react-bootstrap';

import './ImpactEnergy.css'

export default function ImpactEnergy() {
  return (
    <Container className="impact-container">
      <Carousel fade >
      <Carousel.Item interval={2000}>
        <div className="carousel-image-1-holder">
          <img
            className="carousel-image-1"
            src="./images/punching_bag_2.gif"
            alt="First slide"
          />

        </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>
              Nulla vitae elit libero, a pharetra augue mollis
              interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="carousel-image-2-holder">
          <img
            className="carousel-images carousel-image-2"
            src="./images/nuclear_1.gif"
            alt="Second slide"
          />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-image-3-holder">
          <img
            className="carousel-image-3"
            src="./images/comet_crash.gif"
            alt="Third slide"
          />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl
              consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
  );
}
