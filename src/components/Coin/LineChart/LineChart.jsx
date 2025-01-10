import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { convertNumber } from '../../../functions/convertNumber';

export default function LineChart({ chartData, multiAxis, selectMetric }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      y: {
        ticks: {
          callback: function (val, index) {
            if (selectMetric === 'prices') {
              return '$' + val.toLocaleString();
            } else {
              return '$' + convertNumber(val);
            }
          },
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />{' '}
    </div>
  );
}
