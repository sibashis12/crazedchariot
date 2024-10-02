// src/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register Chart.js modules
Chart.register(...registerables);

const PieChart = ({ chartData, chartLabels, chartColors }) => {
    const data = {
        labels: chartLabels, 
        datasets: [
            {
                label: 'Amount Spent in rupees(₹)',
                data: chartData, 
                backgroundColor: chartColors, 
                borderColor: Array(chartData.length).fill('black'),
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{maxWidth: '600px', margin: 'auto' }}>
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
