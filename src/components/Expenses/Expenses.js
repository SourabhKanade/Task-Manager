import React, {useState} from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesChart from "../NewExpense/ExpensesChart";

const Expenses = (props) => {
  const [FilterYear, setFilterYear] = useState('2020');
  
  const filterChangeHandler = (selectedyear) => {
    setFilterYear(selectedyear);
  };

  const filter_Expenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === FilterYear
  });
  
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={FilterYear} onChangeFilter={filterChangeHandler}/>
    <ExpensesChart Expenses={filter_Expenses}/>
   <ExpensesList item={filter_Expenses} />
    </Card>
   </div>
  );
};

export default Expenses;