import ChartComponent from './chartComponent';

const BubbleChart = ({ data }) => {
    const barChartData = {
      labels: data.expenses,
      datasets: [
        {
          label: 'Combined Metrics',
          data: data.profits,
          backgroundColor: 'rgba(79,121,66, 0.2)',
          borderColor: 'rgba(79,121,66, 1)',
          borderWidth: 1,
        },
      ],
    };
    const barChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      return <ChartComponent type="bubble" data={barChartData} options={barChartOptions} />;
    };


export default BubbleChart;