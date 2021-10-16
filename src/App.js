import ExpenseItem from "./components/ExpenseItem";

function App() {

   const data = [
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
    <div>
    <ExpenseItem title={data[0].title} amount={data[0].amount} date={data[0].date} />
    <ExpenseItem title={data[1].title} amount={data[1].amount} date={data[1].date} />
    <ExpenseItem title={data[2].title} amount={data[2].amount} date={data[2].date} />
    <ExpenseItem title={data[3].title} amount={data[3].amount} date={data[3].date} />
    </div>
  );
}

export default App;
