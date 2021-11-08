import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onaddExpenseData(ExpenseData)
  }

  return (
    <div className="new-expense">
    <NewExpenseForm onsaveExpensedata={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
