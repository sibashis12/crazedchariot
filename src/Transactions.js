import React from 'react'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
const Transactions = () => {
  const history = useHistory();
  //const [budget, setBudget] = useState(1);
  //const [total, setTotal] = useState(0);
  const categories=[["Food", "fa-bowl-food"], ["Clothes", "fa-shirt"], ["Entertainment", "fa-gamepad"], ["Housing", "fa-house"], ["Transportation", "fa-car"], ["Health", "fa-stethoscope"], ["Education", "fa-graduation-cap"], ["Personal Care", "fa-face-smile-beam"], ["Savings", "fa-piggy-bank"], ["Gifts/Donations", "fa-gift"], ["Maintainance", "fa-wrench"], ["Miscellaneous", "fa-ellipsis"]];
  // function sort(array){
  //   //insertion sort algorithm to enter element into array
  //   for(let i=1;i<array.length;i++){
  //     let temp=array[i];
  //     let j=i-1;
  //     while(j>=0 && array[j][2]>temp[2]){
  //       array[j+1]=array[j];
  //       j--;
  //     }
  //     array[j+1]=temp;
  //   }
  // }
  // function handleDone(title, index){
  //   document.getElementById(index).classList.add("done");
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 1000);
  //   }).then(() => {let ctasks=tasks;
  //     for(let i=0;i<ctasks.length;i++){
  //       if(ctasks[i][0]===title){
  //         ctasks.splice(i, 1);
  //         break;
  //       }
  //     }
  //     localStorage.setItem("completed", Number.parseInt(localStorage.getItem("completed"))+1);
  //     localStorage.setItem("tasks", JSON.stringify(ctasks));
  //     history.go(0);
  //   }); 
  // }
  function handleEdit(index){
    history.push(`/edit/${index}`);
    localStorage.setItem("eamount", expenses[index][2]);
    localStorage.setItem("ecategory", expenses[index][1]);
  }
  function handleDelete(title, index){
    let cexpenses=JSON.parse(localStorage.getItem("expenses"));
    let deletedExpense=cexpenses[index];
    cexpenses.splice(index, 1);
      let total=Number.parseInt(JSON.parse(localStorage.getItem("total")));
      localStorage.setItem("total", total-deletedExpense[2]);
      let totals=JSON.parse(localStorage.getItem("totals"));
      let numbers=JSON.parse(localStorage.getItem("numbers"));
      numbers[Number.parseInt(deletedExpense[1])]=Number.parseInt(numbers[Number.parseInt(deletedExpense[1])])-1;
      totals[Number.parseInt(deletedExpense[1])]=Number.parseInt(totals[Number.parseInt(deletedExpense[1])])-deletedExpense[2];
      localStorage.setItem("totals", JSON.stringify(totals));
      localStorage.setItem("numbers", JSON.stringify(numbers));
      localStorage.setItem("number", Number.parseInt(localStorage.getItem("number"))-1);
      localStorage.setItem("expenses", JSON.stringify(cexpenses));
      history.go(0);
}
  const [expenses, setExpenses]=useState([]);
  const [number, setNumber]=useState(0);
  //const [completed, setCompleted]=useState(0);
  // let time=new Date().getTime();
  // const [missed, setMissed]=useState(0);
  // const [importantTasks, setImportantTasks] = useState([]);
  // const [unimportantTasks, setUnimportantTasks] = useState([]);
  useEffect(() => {
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
      let cexpenses=JSON.parse(localStorage.getItem("expenses"));
      // let missed=0;
      // for(let i=0;i<ctasks.length;i++){
      //   if(ctasks[i][2]<time){
      //     ctasks.splice(i, 1);
      //     missed++;
      //     i--;
      //   }
      // }
      localStorage.setItem("expenses", JSON.stringify(cexpenses));
      //localStorage.setItem("missed", missed);
      setExpenses(cexpenses);
      setNumber(Number.parseInt(JSON.parse(localStorage.getItem("number"))));
      //setBudget(Number.parseInt(JSON.parse(localStorage.getItem("budget"))));
      //setTotal(Number.parseInt(JSON.parse(localStorage.getItem("total"))));
      // setCompleted(Number.parseInt(JSON.parse(localStorage.getItem("completed"))));
      // setMissed(Number.parseInt(JSON.parse(localStorage.getItem("missed"))));
    }
  }, []);
    
  // useEffect(() => {
  //   let impTasks=[];
  //   let unimpTasks=[];
  //   for(let i=0;i<tasks.length;i++){
  //     if(tasks[i][2]<time){
  //       history.go(0);
  //     }
  //     else{
  //       if(tasks[i][1]==='1'){
  //         impTasks.push(tasks[i]);
  //       }
  //       else{
  //         unimpTasks.push(tasks[i]);
  //       }
  //     }
  //   }
  //   sort(impTasks);
  //   sort(unimpTasks);
  //   setImportantTasks(impTasks);
  //   setUnimportantTasks(unimpTasks);
  // }, [expenses, history]);
  return (
    <div className="adder">
        {<div className="hero">
            {/* {number===(completed+missed) && <Complete />} */}
            {/* {<div className="total">
              <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
                <ProgressBar percentage={percentage} />
                <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
                    {`${percentage}%`}
                </div>
            </div>
              </div>} */}
            {number===0 && <div className="front1">
              <h1>No transactions yet. <p className="green">Add an expense.</p></h1>
            </div>}
            {number!==0 &&<div className="data-container">
              <h2 className="header">Transactions</h2>
              <div className="data-entry1">
                <div className="expense-vitals">Category</div>
                <div className="expense-details">
                    <p>
                      Amount
                    </p>
                    <p>Title</p>
                    </div>
                  <div className="changers">Actions</div>
              </div>
              {expenses.map((expense, index) => (
                <div className="data-entry" key={index}>
                    <div className="expense-vitals">
                        <h4 className="category">{categories[expense[1]][0]}</h4>
                        <i className={`fa-solid ${categories[expense[1]][1]}`} title={`${categories[expense[1]][0]}`}></i>
                    </div>
                    <div className="expense-details">
                        <h3>
                          ₹{expense[2]}
                        </h3>
                        <p> {expense[0]}</p>
                    </div>
                    <div className="changers">
                        <div className="edit" onClick={() => handleEdit(index)}>Edit</div>
                        <div className="delete" onClick={() => handleDelete(expense[0], index)}>Delete</div>
                    </div>
                </div>
            ))}
              {/* {unimportantTasks.map((expense, index) => (
                <div className="expense" key={-index-1} id={`${-index-1}`}>
                  <div className="expense-vitals">
                    <h4 className="unimportant">Not Important</h4>
                    <div className="status" onClick={() => handleDone(expense[0], -index-1)}>Done</div>
                    {expense[2]<(time+259200000) && <h4 className="priority">Urgent</h4>}
                  </div>
                  <div className="expense-details">
                    <h3>Task- {expense[0]}</h3>
                    {((expense[2]-time)>86400000) && <p>Time Remaining: {Math.round((expense[2]-time)/1000/60/60/24)} days and {Math.round((expense[2]-time)/1000/60/60%24)} hours</p>}
                    {((expense[2]-time)<=86400000&&(expense[2]-time)>3600000) && <p>Time Remaining: {Math.round((expense[2]-time)/1000/60/60)} hours and {Math.round((expense[2]-time)/1000/60%60)} minutes</p>}
                    {((expense[2]-time)<=3600000&&(expense[2]-time)>60000) && <p>Time Remaining: {Math.round((expense[2]-time)/1000/60)} minutes</p>}
                  </div>
                  <div className="changers">
                    <Link className="edit" to="/edit">Edit</Link>
                    <div className="cancel" onClick={() => handleCancel(expense[0], -index-1)}>Cancel</div>
                  </div>
                </div>
              ))} */}
            </div>}
              {/* <div className="end">
                <h3 className="section-header">Logs:</h3>
                <div className="logs">
                  <div>Noted expenses: {number}</div>
                  <div>Completed tasks: {completed}</div>
                  <div>Missed tasks: {missed}</div>
                </div>
              </div> */}
          </div>
        }
    </div>
  )
}

export default Transactions
