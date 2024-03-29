import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { v4 as uuidv4 } from 'uuid';

function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: uuidv4(),
        text,
        amount: +amount
      }
      addTransaction(newTransaction);
      
      setText("");
      setAmount("");

    }
    
  return (
    <div className="mt-6">
      <h3 className="font-medium">Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label className="font-medium" htmlFor="text">
            Text{" "}
          </label>{" "}
          <br />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full mt-1 outline-none"
            placeholder="Enter text"
          />
        </div>

        <div className="mt-2">
          <label className="font-medium" htmlFor="amount">
            Amount <br />
            (Negative - expense, positive - income)
          </label>{" "}
          <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full mt-1 outline-none"
            placeholder="Enter amount"
          />
        </div>
        <button className="mt-2 p-1 rounded-md border w-full bg-blue-500">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
