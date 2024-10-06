import React from 'react'
import PieChart from './PieChart';
import BarChart from './BarChart';
import LogChart from './LogChart';
const Visualize = () => {
    let number=0;
    if(!localStorage.getItem("number")){
        localStorage.setItem("number", 0);
        //localStorage.setItem("completed", 0);
        localStorage.setItem("expenses", JSON.stringify([]));
        localStorage.setItem("totals", JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
        //localStorage.setItem("missed", 0);
        localStorage.setItem("budget", 1);
        localStorage.setItem("total", 0);
        localStorage.setItem("numbers", JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
    }
    else{
        number=JSON.parse(localStorage.getItem("number"));
    }
    const dataValues = JSON.parse(localStorage.getItem("totals"));
    const labels = [
        "Food", 
        "Clothes", 
        "Entertainment", 
        "Housing", 
        "Transportation", 
        "Health", 
        "Education", 
        "Personal Care", 
        "Savings", 
        "Gifts/Donations", 
        "Maintainance", 
        "Miscellaneous"

    ];
    const colors = [
        'rgba(255, 99, 132, 1)',   // Red
        'rgba(54, 162, 235, 1)',   // Blue
        'rgba(255, 206, 86, 1)',   // Yellow
        'rgba(75, 192, 192, 1)',   // Teal
        'rgba(255, 0, 255, 1)',  // Magenta
        'rgba(255, 159, 64, 1)',   // Orange
        'rgba(201, 203, 207, 1)',  // Grey
        'rgba(140, 82, 255, 1)',   // Violet
        'rgba(255, 99, 71, 1)',    // Tomato
        'rgba(50, 205, 50, 1)',    // LimeGreen
        'rgba(255, 20, 147, 1)',   // DeepPink
        'rgba(0, 255, 255, 1)'     // Cyan
    ];
    return (<div>
        {number===0 && <div><h1>No transactions yet. Add some from the "Add Expense" page</h1></div>}
        {number!==0 && <div>
            <h2 className="header">Visualize</h2>
                <div className="separate">
                    <h2>Dynamic Logarithmic Bar Chart of expenses</h2>
                    <LogChart chartData={dataValues} chartLabels={labels} chartColors={colors} />
                </div>
                <div className="separate">
                    <h2>Bar Chart of Expenses</h2>
                    <BarChart chartData={dataValues} chartLabels={labels} chartColors={colors} />
                </div>
                <div className="separate">
                    <h2>Pie Chart of Expenses</h2>
                    <PieChart chartData={dataValues} chartLabels={labels} chartColors={colors} />
                </div>
            </div>
        }
        </div>
    );
}

export default Visualize