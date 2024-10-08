// src/LogChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register Chart.js modules
Chart.register(...registerables);

const LogChart = ({ chartData, chartLabels, chartColors }) => {
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

    const minValue = Math.min(...chartData);
    const maxValue = Math.max(...chartData);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                type: 'logarithmic',
                title: {
                    display: true,
                    text: 'Values (Log Scale)',
                    font: {
                        size: 16,
                    },
                },
                min: minValue > 0 ? minValue : 1,
                max: maxValue * 10,
                ticks: {
                    callback: function(value) {
                        return Number(value).toLocaleString(); 
                    },
                    stepSize: 1,
                },
                grid: {
                    color: '#e0e0e0',
                },
            },
            x: {
                grid: {
                    color: '#f0f0f0',
                },
            },
        },
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
            <Bar data={data} options={options} />
        </div>
    );
};


export default LogChart;
