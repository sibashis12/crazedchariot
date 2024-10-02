// src/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register Chart.js modules
Chart.register(...registerables);

const BarChart = ({ chartData, chartLabels, chartColors }) => {
    const data = {
        labels: chartLabels, // Use labels from props
        datasets: [
            {
                label: 'Amount Spent in rupees(₹)',
                data: chartData, // Use data from props
                backgroundColor: chartColors, // Use colors from props
                borderColor: Array(chartData.length).fill('black'), // Set all borders to black
                borderWidth: 2,
            },
        ],
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;
