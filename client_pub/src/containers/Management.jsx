import React from 'react';
// import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import '../containers/Management.css';


function Management() {
  // chart options
  const series = [{
    name: 'Terminals',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
  }]
  const options = {
    annotations: {
      points: [{
        x: 'GPS',
        seriesIndex: 0,
        label: {
          borderColor: '#775DD0',
          offsetY: 0,
          style: {
            color: '#fff',
            background: '#775DD0',
          },
          text: 'GPS are good',
        }
      }]
    },
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'rounded'  
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },
    
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2']
      }
    },
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: ['Current', 'FirstPrep', 'Imu', 'GPS', 'Leds', 'Pic Version',
        'Tcxo cal', 'Temps', 'FullLink UL', 'FullLink DL', 'FL cross poll', 'FL General', 'Ambient'
      ],
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Terminals',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      },
    }
  }


  // pie chart
  const pieSeries = [13, 83];

  const pieOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    fill: {
      colors: ['#F44336', '#3ACE1F']
    },
    labels: ['Fail', 'Pass'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div >
        <h1>Management Page</h1>
        <div className="FailsChart">
          <div className="pie-chart">
            <h2>Pass / Fail status</h2>
            <ReactApexChart options={pieOptions} series={pieSeries} type="pie" width={380} />
            <p>This pie chart show the relation between fail and pass terminals .</p>
          </div>
          <div className="column-chart">
            <h2>Fail Distribution</h2>
            <ReactApexChart options={options} series={series} type="bar" height={350} />
            <p>This histogram show how many terminals fail for each test.</p>
          </div>
        </div>
    </div>
  );
}

export default Management;
