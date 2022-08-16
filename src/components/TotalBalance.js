import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalContext";


function TotalBalance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, curr) => (acc += curr), 0).toFixed(2);

  return (
    <div className="mt-6 text-left">
      <h1 className="text-3xl font-medium text-gray-600">
        Total Balance
      </h1>
      <h4 className='font-medium text-xl'>${total}</h4>
    </div>
  );
}

export default TotalBalance;