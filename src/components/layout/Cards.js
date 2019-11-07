import React from 'react';
import {
  Container,
  Row,
  Card,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';

const Cards = ({ weatherData }) => {
  if (weatherData === undefined) {
    return null;
  } else {
    return (
      <Container>
        <Row>
          {weatherData.data.map((day, index) => (
            <Card className='text-center ml-2 mb-2' key={index}>
              <CardBody>
                <CardTitle>
                  {new Date(day.time * 1000).toDateString().slice(0, 10)}
                </CardTitle>
                <CardText>
                  {Math.round(day.temperatureLow)} &deg;C
                  <span className='mx-2'>|</span>
                  {Math.round(day.temperatureHigh)} &deg;C
                </CardText>
              </CardBody>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
};
export default Cards;
