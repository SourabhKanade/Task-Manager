import React, { useState } from "react";
import './NewExpenseForm.css';

function NewExpenseForm() {
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

const titleChangeHandler = (event) => {
  setEnteredTitle(event.target.value);
}

const amountChangeHandler = (event) => {
  setEnteredAmount(event.target.value);
}

const dateChangeHandler = (event) => {
  setEnteredDate(event.target.value);
}

const submitHandler = (event) => {
  event.preventDefault();
  
  const ExpenseData = {
    title : enteredTitle, 
    amount : enteredAmount,
    date : enteredDate
 };
    console.log(ExpenseData);
};

return (
    <div>
      <form >
        <div className="new-expense__controls">
        <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min='0.5' step='0.01' onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min='22-10-2021' max='22-10-2022' onChange={dateChangeHandler}/>
        </div>
        <div className="new-expense__action">
          <button type="submit" onClick={submitHandler}>Submit</button>
        </div>
       </div>
      </form>
    </div>
  )
}

export default NewExpenseForm
