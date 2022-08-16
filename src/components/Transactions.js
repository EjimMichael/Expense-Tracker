import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Transaction from './Transaction';

function Transactions() {
    const { transactions } = useContext(GlobalContext);

  return (
    <div className="mt-5">
      <h3 className="text-left font-medium">Transactions</h3>
      <ul className="mt-2">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default Transactions;