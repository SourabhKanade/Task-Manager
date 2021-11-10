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

  const filter_Expenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === FilterYear;
  });

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={FilterYear} onChangeFilter={filterChangeHandler}/>
    
    {filter_Expenses.map((expense) => (
     <ExpenseItem key={expense.id}title={expense.title} amount={expense.amount} date={expense.date} />
    ))}
    </Card>
   </div>
  );
};

export default Expenses;