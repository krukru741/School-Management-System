const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'assets', 'js', 'dashboards-analytics.js');
let content = fs.readFileSync(jsPath, 'utf-8');

// The regex will match the Weekly Overview Line Chart block up to its closing brace for the condition
const regex = /\/\/ Weekly Overview Line Chart[\s\S]*?if \(typeof weeklyOverviewChartEl !== undefined && weeklyOverviewChartEl !== null\) {[\s\S]*?weeklyOverviewChart\.render\(\);\n  }/;

const newCharts = `  // Students Overview Charts
  // --------------------------------------------------------------------
  const boysChartEl = document.querySelector('#boysChart'),
    boysChartConfig = {
      chart: {
        height: 180,
        type: 'radialBar'
      },
      series: [53],
      colors: [config.colors.primary],
      plotOptions: {
        radialBar: {
          hollow: { size: '60%' },
          track: { background: '#F0F2F8' },
          dataLabels: {
            name: { show: false },
            value: {
              offsetY: 8,
              color: config.colors.headingColor,
              fontSize: '26px',
              fontWeight: 700,
              fontFamily: fontFamily
            }
          }
        }
      },
      stroke: { lineCap: 'round' }
    };
  if (typeof boysChartEl !== undefined && boysChartEl !== null) {
    const boysChart = new ApexCharts(boysChartEl, boysChartConfig);
    boysChart.render();
  }

  const girlsChartEl = document.querySelector('#girlsChart'),
    girlsChartConfig = {
      chart: {
        height: 180,
        type: 'radialBar'
      },
      series: [47],
      colors: [config.colors.warning],
      plotOptions: {
        radialBar: {
          hollow: { size: '60%' },
          track: { background: '#F0F2F8' },
          dataLabels: {
            name: { show: false },
            value: {
              offsetY: 8,
              color: config.colors.headingColor,
              fontSize: '26px',
              fontWeight: 700,
              fontFamily: fontFamily
            }
          }
        }
      },
      stroke: { lineCap: 'round' }
    };
  if (typeof girlsChartEl !== undefined && girlsChartEl !== null) {
    const girlsChart = new ApexCharts(girlsChartEl, girlsChartConfig);
    girlsChart.render();
  }`;

content = content.replace(regex, newCharts);

fs.writeFileSync(jsPath, content);
console.log('Charts updated successfully.');
