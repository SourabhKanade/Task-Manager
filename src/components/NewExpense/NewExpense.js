import React, { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {
  const [toggle, settoggle] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onaddExpenseData(ExpenseData)
    // settoggle(true);
  }

const changePageHandler = () => {
  settoggle(true);
}

const cancelPageHandler = () => {
 console.log('cancel clicked');
  settoggle(false);
}

  return (
    <div className="new-expense">
    {!toggle && <button onClick={changePageHandler}>Add New Expenses</button>}
    {toggle && <NewExpenseForm onsaveExpensedata={saveExpenseDataHandler} onClick={cancelPageHandler}/>}
    </div>
  )
}

export default NewExpense;