import React from 'react'

function IncomeExpense() {
  return (
    <div className="flex border p-3 px-10 mt-4 bg-white">
      <h4 className='pr-5 border-r text-gray-800 bolder text-xl'>
        Income
        <p className='font-medium text-green-600'>+$0.00</p>
      </h4>

      <h4 className='pl-5 text-gray-800 bolder text-xl'>
        Expense
        <p className='font-medium text-red-600'>-$0.00</p>
      </h4>
    </div>
  );
}

export default IncomeExpense;