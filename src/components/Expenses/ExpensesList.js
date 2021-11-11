import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css';

function ExpensesList(props) {
 
  // props.item.length === 0 ? (<h2 className='expenses-list__fallback'>Expenses Not Found </h2>) :  (props.item.map((expense) => (
  //   <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
  //  )))

  if(props.item.length === 0) {
    return <h2 className='expenses-list__fallback'>Expenses Not Found</h2>
  }

  return (
    <div>
    <ul className="expenses-list">
    { props.item.map((expense) => (
    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
   )) }
    </ul>
    </div>
  )
}

export default ExpensesList
