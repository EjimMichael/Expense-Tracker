import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalContext";


function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

   const income = amounts
   .filter(amount => amount > 0)
   .reduce((acc, curr) => (acc += curr), 0)
   .toFixed(2);

   const expense = (amounts 
   .filter(amount => amount < 0)
   .reduce((acc, curr) => (acc += curr), 0) * -1)
   .toFixed(2);

  return (
    <div className="flex border p-3 px-10 mt-4 bg-white">
      <h4 className='pr-5 border-r text-gray-800 bolder text-xl'>
        Income
        <p className='font-medium text-green-600'>${income}</p>
      </h4>

      <h4 className='pl-5 text-gray-800 bolder text-xl'>
        Expense
        <p className='font-medium text-red-600'>${expense}</p>
      </h4>
    </div>
  );
}

export default IncomeExpense;