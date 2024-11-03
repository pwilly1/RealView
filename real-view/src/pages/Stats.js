import React from 'react';
import StatsChart from '../components/StatsChart'; 
import '../css/stats.css'; 
import Header from "../components/Header"
const Stats = () => {
  const chart1Data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Average Price ($)',
        data: [300000, 320000, 340000, 360000, 380000, 400000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const chart2Data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Properties Sold',
        data: [50, 60, 75, 80, 70, 90],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chart3Data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Price per Square Foot ($)',
        data: [150, 160, 170, 180, 190, 200],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleCalculateBestTime = () => {
    const bestTime = 'Based on current market trends, the best time to buy is in September.';
    document.getElementById('buy-time-result').textContent = bestTime;
  };

  return (
    <main>
        <Header />
      <section className="market-statistics">
        <h2>Market Statistics</h2>
        <p>This page will provide you with valuable insights into the real estate market, including trends, pricing, and other relevant metrics.</p>

        <div className="filter-section">
          <select>
            <option>Region</option>
          </select>
          <select>
            <option>Date</option>
          </select>
          <select>
            <option>Property Type</option>
          </select>
        </div>

        <div className="charts-grid">
          <div className="chart-box">
            <h3>Average Property Prices</h3>
            <StatsChart chartId="chart1" type="line" data={chart1Data} options={options} />
          </div>
          <div className="chart-box">
            <h3>Number of Properties Sold</h3>
            <StatsChart chartId="chart2" type="bar" data={chart2Data} options={options} />
          </div>
          <div className="chart-box">
            <h3>Price per Square Foot</h3>
            <StatsChart chartId="chart3" type="line" data={chart3Data} options={options} />
          </div>
        </div>

        <section className="buy-time-calculator">
          <h2>Best Time to Buy Calculator</h2>
          <p>Find the best time to buy a home based on historical market trends.</p>
          <button id="calculate-best-time" onClick={handleCalculateBestTime}>Calculate Best Time</button>
          <div id="buy-time-result"></div>
        </section>
      </section>
    </main>
  );
};

export default Stats;
