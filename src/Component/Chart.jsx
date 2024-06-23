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
      },
      labels: {
        formatter: (value) => value.toFixed(6)  // Format y-axis labels here
      }
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy HH:mm:ss'
      },
      y: {
        formatter: (value) => value // Show original value in the tooltip
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
      data: dataSet.map(data => [data.timestamp, data.value])
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
