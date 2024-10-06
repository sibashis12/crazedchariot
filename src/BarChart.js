
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

// Utility function to slightly darken the color on hover
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

export default BarChart;
