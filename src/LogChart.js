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

// Utility function to darken the hover color
function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt((R * (100 + percent)) / 100);
    G = parseInt((G * (100 + percent)) / 100);
    B = parseInt((B * (100 + percent)) / 100);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    let RR = (R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16));
    let GG = (G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16));
    let BB = (B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}

export default LogChart;
