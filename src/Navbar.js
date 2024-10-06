import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src="https://img.freepik.com/free-vector/hand-with-wallet-money-icon-isolated_18591-82231.jpg?semt=ais_hybrid" alt="App logo" className="logo"></img>
        <h1>Pluto</h1>
        <div className="add-button">
          <Switch>
            <Route exact path="/">
              <Link to='/add'><i className="fa-solid fa-plus scoot" title="Add Expense"></i><p>Add Expense</p></Link>
              <Link to='/visualize'><i className="fa-solid fa-chart-line scoot" title="Visualize"></i><p>Visualize</p></Link>
              <Link to='/transactions'><i className='fa-solid fa-money-bill-transfer scoot' title="Transactions"></i><p>Transactions</p></Link>
            </Route>
            <Route exact path="/add">
              <Link to='/'><i className="fa-solid fa-house scoot" title="Home"></i><p>Home</p></Link>
              <Link to='/visualize'><i className="fa-solid fa-chart-line scoot" title="Visualize"></i><p>Visualize</p></Link>
              <Link to='/transactions'><i className='fa-solid fa-money-bill-transfer scoot' title="Transactions"></i><p>Transactions</p></Link>
            </Route>
            <Route exact path="/visualize">
              <Link to='/'><i className="fa-solid fa-house scoot" title="Home"></i><p>Home</p></Link>
              <Link to='/add'><i className="fa-solid fa-plus scoot" title="Add Expense"></i><p>Add Expense</p></Link>
              <Link to='/transactions'><i className='fa-solid fa-money-bill-transfer scoot' title="Transactions"></i><p>Transactions</p></Link>
            </Route>
            <Route exact path="/transactions">
              <Link to='/'><i className="fa-solid fa-house scoot" title="Home"></i><p>Home</p></Link>
              <Link to='/add'><i className="fa-solid fa-plus scoot" title="Add Expense"></i><p>Add Expense</p></Link>
              <Link to='/visualize'><i className='fa-solid fa-chart-line scoot' title="Visualize"></i><p>Visualize</p></Link>
            </Route>
            <Route path="*">
              <Link to='/'><i className="fa-solid fa-house scoot" title="Home"></i>Home</Link>
            </Route>
            </Switch>
        </div>
    </div>
  )
}

export default Navbar