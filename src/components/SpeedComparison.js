import { useRef } from 'react';
import {
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';

import './SpeedComparison.css';

export default function SpeedComparison({
  averageVelocity,
  closestComet,
}) {
  const cometRef = useRef(null);

  const card2Style = {
    width: '1060px',
    height: '400px',
  };

  const cardSpeed = {
    backgroundImage: 'url(./images/background_road.jpeg)',
  };

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
    <>
      <Card bg="warning" style={card2Style} className="cards">
        <Card.Header>
          Compare this comets speed to the fastest man alive and the
          fastest car!
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
              <img className="driving-car" src="./images/car.png" />
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
  );
}
