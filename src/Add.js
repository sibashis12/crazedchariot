import React from 'react'
import {useState} from 'react'
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
        totals[Number.parseInt(category)]=Number.parseInt(totals[Number.parseInt(category)])+amount;
        localStorage.setItem("totals", JSON.stringify(totals));
        history.push('/');
    }
  return (
    <div className="container">
        <div className="color-filler hide"></div>
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
                            <option value="0"><i class="fa-solid fa-bowl-food"></i>Food</option> 
                            <option value="1"><i class="fa-solid fa-shirt"></i>Clothes</option> 
                            <option value="2"><i class="fa-solid fa-gamepad"></i>Entertainment</option> 
                            <option value="3"><i class="fa-solid fa-house"></i>Housing</option>
                            <option value="4"><i class="fa-solid fa-car"></i>Transportation</option>
                            <option value="5"><i class="fa-solid fa-stethoscope"></i>Health</option>
                            <option value="6"><i class="fa-solid fa-graduation-cap"></i>Education</option>
                            <option value="7"><i class="fa-solid fa-face-smile-beam"></i>Personal Care</option>
                            <option value="8"><i class="fa-solid fa-piggy-bank"></i>Savings</option>
                            <option value="9"><i class="fa-solid fa-gift"></i>Gifts/Donations</option>
                            <option value="10"><i class="fa-solid fa-wrench"></i>Maintainance</option>
                            <option value="11"><i class="fa-solid fa-ellipsis"></i>Miscellaneous</option> 
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
        <div className="color-filler hide"></div>
    </div>
  )
}

export default Add