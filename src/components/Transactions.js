import React from 'react'

function Transactions() {
  return (
    <div className='mt-5'>
        <h3 className='text-left font-medium'>Transactions</h3>
        <ul className='mt-2'>
            <li className='flex justify-between border border-r-4 border-r-green-600 pl-2 bg-white'>Cash
            <p className='pr-2'>+$200</p>
            </li>
        </ul>
    </div>
  )
}

export default Transactions;