import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({data, options, title}) => (
  <div>
    <div className='header'>
      <h1 className='title'>{title}</h1>
    </div>
    <Line data={data} options={options} height={120} />
  </div>
);

export default LineChart;