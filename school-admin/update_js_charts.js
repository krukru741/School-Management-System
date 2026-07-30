const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'assets', 'js', 'dashboards-analytics.js');
let content = fs.readFileSync(jsPath, 'utf-8');

const newCharts = `
  // Earnings Line Chart
  // --------------------------------------------------------------------
  const earningsLineChartEl = document.querySelector('#earningsLineChart'),
    earningsLineChartConfig = {
      chart: {
        height: 250,
        type: 'line',
        parentHeightOffset: 0,
        zoom: { enabled: false },
        toolbar: { show: false }
      },
      series: [
        { name: 'Income', data: [560, 800, 520, 700, 850, 480, 500, 750, 700, 850, 500, 600] },
        { name: 'Expense', data: [400, 550, 350, 550, 400, 200, 300, 400, 350, 550, 350, 400] }
      ],
      colors: [config.colors.info, config.colors.primary],
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth', width: 3 },
      legend: { show: false },
      grid: {
        strokeDashArray: 5,
        borderColor: borderColor,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
        padding: { top: -20, bottom: -10, left: 10, right: 10 }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: { style: { colors: labelColor, fontSize: '13px' } },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          style: { colors: labelColor, fontSize: '13px' },
          formatter: function (val) { return val + 'K'; }
        }
      }
    };
  if (typeof earningsLineChartEl !== undefined && earningsLineChartEl !== null) {
    const earningsLineChart = new ApexCharts(earningsLineChartEl, earningsLineChartConfig);
    earningsLineChart.render();
  }

  // Financial Overview Sparklines
  // --------------------------------------------------------------------
  const sparklineOptions = {
    chart: { height: 40, width: 60, type: 'line', sparkline: { enabled: true } },
    dataLabels: { enabled: false },
    stroke: { width: 2, curve: 'smooth' },
    tooltip: {
      fixed: { enabled: false },
      x: { show: false },
      y: { title: { formatter: function (seriesName) { return '' } } },
      marker: { show: false }
    }
  };

  const incomeSparkEl = document.querySelector('#financialIncomeSparkline');
  if (typeof incomeSparkEl !== undefined && incomeSparkEl !== null) {
    const incomeSpark = new ApexCharts(incomeSparkEl, {
      ...sparklineOptions,
      series: [{ data: [12, 14, 18, 47, 42, 55, 35, 75] }],
      colors: [config.colors.info]
    });
    incomeSpark.render();
  }

  const expenseSparkEl = document.querySelector('#financialExpenseSparkline');
  if (typeof expenseSparkEl !== undefined && expenseSparkEl !== null) {
    const expenseSpark = new ApexCharts(expenseSparkEl, {
      ...sparklineOptions,
      series: [{ data: [45, 65, 45, 80, 52, 60, 45, 95] }],
      colors: [config.colors.info]
    });
    expenseSpark.render();
  }
`;

// Append only if it doesn't already exist to avoid duplicates
if (!content.includes('earningsLineChart')) {
  fs.writeFileSync(jsPath, content + newCharts);
  console.log('Charts JS appended successfully.');
} else {
  console.log('Charts JS already exists.');
}
