
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

const LogChart = ({ chartData, chartLabels, chartColors }) => {
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

    const minValue = Math.min(...chartData);
    const maxValue = Math.max(...chartData);

    const options = {
        responsive: true, // Make the chart responsive
        scales: {
            y: {
                type: 'logarithmic', // Set y-axis to logarithmic scale
                title: {
                    display: true,
                    text: 'Values (Log Scale)',
                },
                min: minValue > 0 ? minValue : 1, // Ensure min is greater than 0
                max: maxValue * 10, // Set max value dynamically, adjust as needed
                ticks: {
                    // Customize ticks display
                    callback: function(value) {
                        return Number(value).toLocaleString(); // Format numbers for display
                    },
                    // You can set step size for the logarithmic scale
                    // `stepSize` works differently in logarithmic scales
                    stepSize: 1, // For logarithmic, step size doesn't apply directly
                },
            },
        },
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default LogChart;
