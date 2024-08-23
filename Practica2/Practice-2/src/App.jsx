import './App.css'
import Table from './Components/Table';

const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 },
  ];

  const averageIncome = netIncomes.reduce((acc, curr) => acc + curr.income, 0) / netIncomes.length;

  return (
    <div>
      <Table netIncomes={netIncomes} />
      <p>Ingreso neto promedio: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;