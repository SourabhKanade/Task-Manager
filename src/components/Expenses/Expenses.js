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
    <ExpenseItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date} />
    <ExpenseItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date} />
    </Card>
   </div>
  )
}

export default Expenses
