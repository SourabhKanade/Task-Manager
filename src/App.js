import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const Items = [
    {
      id: '01',
      title: 'football',
      amount: 354.17,
      date: new Date(Date.UTC(2021, 11, 16))
    },
    {
      id: '02',
      title: 'cricket',
      amount: 598.17,
      date: new Date(Date.UTC(2021, 1, 20))
    },
  ];
  
  const App = () => {
  const [slots, setslots] = useState(Items)
  
  const addExpenseData = (expense) => {
    setslots((prevSlots) => {
      return [expense, ...prevSlots]
    });
  };
  return (
    <>
    <NewExpense onaddExpenseData={addExpenseData}/>
    <Expenses data={slots}/>
  </>
  );
}

export default App;
