import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Transactions() {
    const { transactions } = useContext(GlobalContext);

  return (
    <div className='mt-5'>
        <h3 className='text-left font-medium'>Transactions</h3>
        <ul className='mt-2'>
        {transactions.map(transaction => ( 
            <li key={transaction.id} className="flex justify-between border border-r-4 border-r-green-600 pl-2 bg-white">
              {transaction.text}
              <p className="pr-2 py font-medium">+$200</p>
            </li>
        ))}
            
        </ul>
    </div>
  )
}

export default Transactions;