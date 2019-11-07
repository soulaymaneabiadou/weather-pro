import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import WeatherContext from '../../context/weather/WeatherContext';

const Header = () => {
  const weatherContext = useContext(WeatherContext);
  const { weather } = weatherContext;

  if (weather.currently === undefined) return null;
  else {
    const {
      time,
      temperature,
      precipProbability,
      humidity,
      windSpeed
    } = weather.currently;
    const currentDate = new Date(time * 1000).toLocaleString().slice(0, 10);
    const currentTime = new Date(time * 1000).toLocaleString().slice(13, 21);

    return (
      <Container>
        <Row className='mt-4 mb-5'>
          <Col xs='12' md='6'>
            <h1 className='temperature'>{Math.round(temperature)} &deg;C</h1>
          </Col>
          <Col xs='12' md='6'>
            <div className='date-time'>
              <h4>{currentDate}</h4>
              <h4>{currentTime}</h4>
            </div>
            <hr />
            <div className='additions'>
              <h5>Humidity: {Math.round(humidity * 10)}%</h5>
              <h5>Precipitation: {precipProbability * 10}%</h5>
              <h5>Wind Speed: {Math.round(windSpeed * 3.6)} KPH</h5>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Header;
