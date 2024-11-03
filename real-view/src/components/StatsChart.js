import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const StatsChart = (chart) => {
  useEffect(() => {
    const ctx = document.getElementById(chart.chartId).getContext('2d');
    new Chart(ctx, {
      type: chart.type,
      data: chart.data,
      options: chart.options,
    });
  }, [chart.chartId, chart.type, chart.data, chart.options]);

  return <canvas id={chart.chartId}></canvas>;
};

export default StatsChart;
