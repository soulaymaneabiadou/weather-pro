import React, { useContext } from 'react';
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap';
import Chart from '../layout/Chart';
import Cards from '../layout/Cards';

import WeatherContext from '../../context/weather/WeatherContext';

const Forcast = () => {
  const weatherContext = useContext(WeatherContext);
  const { weather } = weatherContext;
  const { hourly, daily } = weather;

  return (
    <Container>
      <Nav tabs className='tabs mt-5'>
        <NavItem>
          <NavLink className='active'>Today</NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab='1' className='py-4'>
        <TabPane tabId='1'>
          <Chart
            forcast={{
              label: 'Hourly Weather Expectations',
              weatherData: hourly
            }}
          />
        </TabPane>
      </TabContent>

      <Nav tabs className='tabs mt-5'>
        <NavItem>
          <NavLink className='active'>During The Week</NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab='1' className='py-4'>
        <TabPane tabId='1'>
          <Cards weatherData={daily} />
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default Forcast;
