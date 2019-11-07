import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ forcast }) => {
  const { label, weatherData } = forcast;
  const data = {
    labels: [], // SOULD BE THE TIME
    datasets: [
      {
        label,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [] // SHOULD BE THE TEMPERATURE
      }
    ]
  };

  if (weatherData !== undefined) {
    weatherData.data.forEach(hour => {
      const label = new Date(hour.time * 1000).toLocaleTimeString();
      data.labels.push(label.slice(0, 5));
      const day = data.labels.slice(0, 16);
      data.labels = day;
    });

    weatherData.data.forEach(hour =>
      data.datasets.forEach(dataset =>
        dataset.data.push(Math.round(hour.temperature))
      )
    );
  }

  return (
    <div>
      <Line
        data={data}
        width={1000}
        height={500}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default Chart;
