import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalContext";


function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <div className="flex group">
      <li className="w-full flex justify-between border pl-2 bg-white font-medium text-gray-700">
        {transaction.text}
        <p
          className={
            transaction.amount < 0
              ? "border-r-4 pr-2 py border-r-red-600"
              : "border-r-4 pr-2 py border-r-green-600"
          }
        >
          {sign}${Math.abs(transaction.amount)}
        </p>
      </li>
      <button onClick={() => deleteTransaction(transaction.id)} className="hidden group-hover:block text-red-700 font-medium pl-1 text-2xl">
        x
      </button>
    </div>
  ); 
}

export default Transaction;