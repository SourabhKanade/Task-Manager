import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Content = [
    {
      id: '01',
      title: 'football',
      amount: 354.17,
      date: new Date(Date.UTC(2021, 11, 10))
    },
    {
      id: '02',
      title: 'cricket',
      amount: 598.17,
      date: new Date(2021, 5, 12),
      // date: new Date(Date.UTC(2021, 1, 20))
    },
  ];
  
  const App = () => {
  const [slots, setslots] = useState(Dummy_Content)
  
  const addExpenseData = (expense) => {
    setslots((prevSlots) => {
      return [expense, ...prevSlots]
    });
    console.log(expense);
  };
  return (
    <>
    <NewExpense onaddExpenseData={addExpenseData}/>
    <Expenses data={slots}/>
  </>
  );
}

export default App;
