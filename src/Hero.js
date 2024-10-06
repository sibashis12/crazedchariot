import React from 'react'

const Hero = () => {
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
  return (
    <div className="container">
        <div className="home">
            <div className="front">
              <h1>Manage your personal finances <p className="green">simply and effectively</p></h1>
            </div>
            <div className="component">
              <div className="section">
                <h2>List your expenses in seconds and put them in diverse categories like Health, Food, Savings, etc. in <h2 className="green">Add Expense</h2> section</h2>
              </div>
              <div className="section">
                <img src="https://img.freepik.com/free-vector/credit-score-flat-background-with-male-character-holding-coin-surrounded-by-round-compositions-financial-icons-vector-illustration_1284-83829.jpg?ga=GA1.1.1569983476.1727876886&semt=ais_hybrid"></img>
              </div>
            </div>
            {/* <div className="component">
              <div className="section">
                <h2>Add budgets for each category and track your spendings in Analyze section</h2>
              </div>
              <div className="section">
                <img src="https://img.freepik.com/free-vector/budgeting-concept-idea-financial-planning-wellbeing-currency-balance-income-money-allocation-isolated-flat-illustration-vector_613284-1084.jpg?ga=GA1.1.1569983476.1727876886&semt=ais_hybrid"></img>
              </div>
            </div> */}
            <div className="component">
              <div className="section">
                <h2>Envision your expenses in pie, and bar charts for more insight in <h2 className="green">Visualize</h2> section</h2>
              </div>
              <div className="section">
                <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?ga=GA1.1.1569983476.1727876886&semt=ais_hybrid"></img>
              </div>
            </div>
            <div className="component">
              <div className="section">
                <h2>View, edit and delete your transactions as you wish in <h2 className="green">Transactions</h2> section</h2>
              </div>
              <div className="section">
                <img src="https://img.freepik.com/free-vector/business-team-brainstorming-discussing-startup-project_74855-6909.jpg?ga=GA1.1.1569983476.1727876886&semt=ais_hybrid"></img>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero