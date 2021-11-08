import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";

const Expenses = (props) => {
  const [FilterYear, setFilterYear] = useState('2020');
  
  const filterChangeHandler = (selectedyear) => {
    setFilterYear(selectedyear);
  };
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={FilterYear} onChangeFilter={filterChangeHandler}/>
    {props.data.map((expense) => (
     <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
    ))}
    </Card>
   </div>
  );
};

export default Expenses
