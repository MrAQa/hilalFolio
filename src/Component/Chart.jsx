import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = ({ dataSet }) => {
  const options = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2 // Set the stroke width here
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: 'Value'
      }
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy HH:mm:ss'
      }
    },
    colors: ['#7147B4'], // Set your desired color here
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    }
  };

  const series = [
    {
      name: 'Value',
      data: dataSet.map(data => [data.timestamp, Math.round(data.value)])
    }
  ];

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
