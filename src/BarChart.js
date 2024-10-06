
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BarChart = ({ chartData, chartLabels, chartColors }) => {
    const data = {
        labels: chartLabels,
        datasets: [
            {
                label: 'Amount Spent in rupees(₹)',
                data: chartData,
                backgroundColor: chartColors,
                borderColor: Array(chartData.length).fill('black'),
                borderWidth: 2,
                hoverBackgroundColor: Array(chartData.length).fill('gold'),
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                    },
                    color: '#333',
                },
            },
            tooltip: {
                backgroundColor: '#fff',
                titleColor: '#333',
                bodyColor: '#666',
                borderColor: '#ddd',
                borderWidth: 1,
                bodyFont: {
                    size: 14,
                },
                callbacks: {
                    label: function (tooltipItem) {
                        return `₹ ${tooltipItem.raw}`;
                    },
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
            <Bar data={data} options={options} />
        </div>
    );
};


export default BarChart;
