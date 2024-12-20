import React, { useEffect, useState } from 'react';
import './App.css';
import BarChart from './components/barChart';
import BubbleChart from './components/bubbleChart';
import LineChart from './components/lineChart';
import ScatterChart from './components/scatterChart';

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data));
  }, []);
  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Interactive Charts with React and Chart.js</h1>
      <hr></hr>
      <h2>Financial Data Dashboard</h2>
      <BarChart data={chartData} />
      <br></br>
      <LineChart data ={chartData} />
      <br></br>
      <ScatterChart data ={chartData} />
      <br></br>
      <BubbleChart data ={chartData} />
      
    </div>
  );
}

export default App
