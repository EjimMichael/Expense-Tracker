import Header from './components/Header';
import TotalBalance from './components/TotalBalance';
import IncomeExpense from './components/IncomeExpense';
import Transactions from './components/Transactions';

function App() {
  return (
    <div className="w-screen h-screen overflow-auto flex flex-col items-center justify-center bg-[#F5F7FB]">
      <Header />
      <div className='flex flex-col'>
        <TotalBalance />
        <IncomeExpense />
        <Transactions />
      </div>
    </div>
  );
}

export default App;