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
                hoverBackgroundColor: Array(chartData.length).fill('gold'), // Set hover color to gold
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                backgroundColor: '#fff',
                titleColor: '#333',
                bodyColor: '#666',
                borderColor: '#ddd',
                borderWidth: 1,
                callbacks: {
                    label: function (tooltipItem) {
                        return `₹ ${tooltipItem.raw}`;
                    },
                },
            },
            legend: {
                labels: {
                    font: {
                        size: 14,
                    },
                    color: '#333',
                },
            },
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart',
        },
    };

    return (
        <div className="chart-container">
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
