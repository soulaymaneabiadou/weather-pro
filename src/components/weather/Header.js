import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import WeatherContext from '../../context/weather/WeatherContext';

const Header = () => {
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    weatherContext.getGeolocation();
    // eslint-disable-next-line
  }, []);

  const { weather } = weatherContext;

  const { timezone, currently } = weather;

  if (weather.currently === undefined) {
    return <h4>Loading...</h4>;
  } else {
    return (
      <Container>
        <Row className='my-4'>
          <Col>
            <h5>{timezone}</h5>
            <h4>{currently.time}</h4>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Header;
