const apiUrl = 'http://api.coindesk.com/v1/bpi/historical/close.json';

axios
  .get(apiUrl)
  .then((response) => {
    console.log(response.data.bpi);
    printChartData(response.data.bpi);
  })
  .catch((err) => {
    console.log(err);
  });

const printChartData = (stockData) => {
  const dailyData = Object.keys(stockData);
  const bitcoinPrices = Object.values(stockData);

var ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: dailyData,
    datasets: [
      {
        data: bitcoinPrices,
        label: 'Bitcoin Daily Prices',
        borderColor: '#3e95cd',
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Bitcoin Price Index',
    },
  },
});
};
