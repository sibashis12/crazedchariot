import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Add = () => {
    const history=useHistory();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState("0");
    const [amount, setAmount] = useState(10);
    // let curTime = new Date();
    // curTime=curTime.getTime();
    const onSubmit = (e) => {
        e.preventDefault();
        if(amount<=0){
            alert("Amount should be greater than 0");
            return;
        }
        let expenses = JSON.parse(localStorage.getItem("expenses"));
        let newExpense=[title, category, amount];
        expenses.push(newExpense);
        localStorage.setItem("expenses", JSON.stringify(expenses));
        localStorage.setItem("number", Number.parseInt(JSON.parse(localStorage.getItem("number")))+1);
        localStorage.setItem("total", Number.parseInt(JSON.parse(localStorage.getItem("total")))+amount);
        let totals=JSON.parse(localStorage.getItem("totals"));
        let numbers=JSON.parse(localStorage.getItem("numbers"));
        numbers[Number.parseInt(category)]=Number.parseInt(numbers[Number.parseInt(category)])+1;
        localStorage.setItem("numbers", JSON.stringify(numbers));
        totals[Number.parseInt(category)]=Number.parseInt(totals[Number.parseInt(category)])+amount;
        localStorage.setItem("totals", JSON.stringify(totals));
        history.push('/transactions');
    }
  return (
    <div className="adder">
        <div>
            <h2 className="header">Add Expense</h2>
            <form onSubmit={onSubmit} className="form">
                <div>
                    <label>Title: 
                        <input type="text" value={title} placeholder='Title of the expense' required onChange={(e) => setTitle(e.target.value)}></input>
                    </label>
                </div>
                {/* <div>
                    <label>Deadline: 
                        <input type="datetime-local" value={(new Date(deadline+19800000)).toISOString().slice(0,16)} required onChange={(e) => {
                            let dTime=Date.parse(e.target.value);
                            if(dTime<curTime){
                                console.log("alert");
                                console.log(dTime);
                                console.log(curTime);
                                console.log(deadline);
                                alert("Deadline should be on or after today's date");
                            }
                            else{
                                setDeadline(dTime);
                            }
                        }}></input>
                    </label>
                </div> */}
                <div>
                    <label>Category: 
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="0">Food</option> 
                            <option value="1">Clothes</option> 
                            <option value="2">Entertainment</option> 
                            <option value="3">Housing</option>
                            <option value="4">Transportation</option>
                            <option value="5">Health</option>
                            <option value="6">Education</option>
                            <option value="7">Personal Care</option>
                            <option value="8">Savings</option>
                            <option value="9">Gifts/Donations</option>
                            <option value="10">Maintainance</option>
                            <option value="11">Miscellaneous</option> 
                        </select>
                    </label>
                </div>
                <div>
                    <label>Amount in ₹: 
                        <input type="number" value={amount} placeholder='Amount of the expense' required onChange={(e) => {setAmount(Number.parseInt(e.target.value))}}></input>
                    </label>
                </div>
                <button type="submit" className="button">Add</button>
            </form>
        </div>
    </div>
  )
}

export default Add