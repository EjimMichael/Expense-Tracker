import React from 'react';

function Transaction({ transaction }) {
    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className="flex justify-between border pl-2 bg-white font-medium text-gray-700">
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
  ); 
}

export default Transaction;