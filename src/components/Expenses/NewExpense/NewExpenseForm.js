import React from 'react'
import './NewExpenseForm.css';

function NewExpenseForm() {
  return (
    <div>
      <form >
        <div className="new-expense__controls">
        <div className="new-expense__control">
        <label>Title</label>
        <input type="text" />
        </div>
        <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min='0.5' step='0.01'/>
        </div>
        <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min='22-10-2021' max='22-10-2022'/>
        </div>
        <div className="new-expense__action">
          <button type="submit">Submit</button>
        </div>
       </div>
      </form>
    </div>
  )
}

export default NewExpenseForm
