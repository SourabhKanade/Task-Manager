import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const App = () => {

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
    {
      id: '03',
      title: 'udemy', 
      amount: 454.17, 
      date: new Date(Date.UTC(2021, 4, 25))
    },
    {
      id: '04', 
      title: 'unit-test', 
      amount: 234.17, 
      date: new Date(Date.UTC(2021, 8, 10))
    },
  ];
  return (
    <>
    <NewExpense />
    <Expenses data={Items}/>
  </>
  );
}

export default App;
