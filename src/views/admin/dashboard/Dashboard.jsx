import React, { Component } from 'react';
import { Chart } from "react-google-charts";


const options = {
  pieHole: 0.4,
  is3D: false,
  animation: {
    startup: true,
    easing: 'linear'
  },
  colors: [
    '#293B3D',
    '#E36C4C',
    '#B8A1C3',
    '#E3B74C',
    '#C0BAA6'
  ]
};
var dataOne = [
  ['Element', 'Density', 'Proper', 'Others'],
  ['Copper', 418.94, 345, 250],            // RGB value
  ['Silver', 110.49, 456, 270],            // English color name
  ['Gold', 191.30, 233, 160],
  ['Platinum', 521.45, 254, 190], // CSS-style declaration
  ['Copper', 418.94, 345, 250],            // RGB value
  ['Silver', 110.49, 456, 270],            // English color name
  ['Gold', 191.30, 233, 160],
  ['Platinum', 521.45, 254, 190], // CSS-style declaration
];
var dataTwo = [
  ['Element', 'Orders'],
  ['Copper', 418.94],            // RGB value
  ['Silver', 110.49],            // English color name
  ['Gold', 191.30],
  ['Platinum', 521.45], // CSS// CSS-style declaration
  ['Copper', 418.94],            // RGB value
  ['Silver', 110.49],            // English color name
  ['Gold', 191.30],
  ['Platinum', 521.45], // CSS// CSS-style declaration
];
var dataPie = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7]
];
const dataThree = [
  ["Year", "Population"],
  ["2019", 8175000],
  ["2020", 3792000],
  ["2021", 2695000],
  ["2022", 2099000],
  ["2023", 1526000],
];
const dataMap = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

class Dashboard extends Component {


  render() {
    return (
      <React.Fragment>
        <div className='row mb-4'>
          <div className="col-12">
            <div className="box-container">
              <div className='graph-header'>
                <h3>Total Orders Graph</h3>
                <p>Last 8 Type orders data</p>
              </div>
              <Chart
                height={'200px'}
                // width={'100%'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={dataOne}
                options={{
                  chart: {
                    legend: "none",
                    seriesType: 'bars',
                  },
                  legend: "none",
                  colors: ['#101422', '#92a872', '#10a872'],
                  is3D: true
                }}
              />
            </div>
          </div>
        </div>
        <div className='row mb-4'>
          <div className="col-sm-8">
            <div className="box-container">
              <div className='graph-header'>
                <h3>Popularity Graph</h3>
                <p>Only 5 popularity data</p>
              </div>
              <Chart
                height={'200px'}
                width={'100%'}
                chartType="GeoChart"
                chartEvents={[
                  {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                      const chart = chartWrapper.getChart();
                      const selection = chart.getSelection();
                      if (selection.length === 0) return;
                      const region = dataMap[selection[0].row + 1];
                      console.log("Selected : " + region);
                    },
                  },
                ]}
                data={dataMap}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box-container">
              <div className='graph-header'>
                <h3>Profit Graph</h3>
                <p>Today profit data</p>
              </div>
              <Chart
                height={'200px'}
                width={'100%'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={dataPie}
                options={options}
                hole={4}
              />
            </div>
          </div>
        </div>
        <div className='row mb-4'>
          <div className="col-sm-5">
            <div className="box-container">
              <div className='graph-header'>
                <h3>Yearly Graph</h3>
                <p>Last 5 Years data</p>
              </div>
              <Chart
                height={'200px'}
                width={'100%'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={dataThree}
                options={{
                  colors: ['#f76d7d']
                }}
              />
            </div>
          </div>
          <div className="col-sm-7">
            <div className="box-container">
              <div className='graph-header'>
                <h3>Normal Order Graph</h3>
                <p>Last 12 months normal order data</p>
              </div>
              <Chart
                height={'200px'}
                width={'100%'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={dataTwo}
                options={{
                  chart: {
                    legend: "none",
                    seriesType: 'bars',
                  },
                  legend: "none",
                  colors: ['#5D3891']
                }}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;