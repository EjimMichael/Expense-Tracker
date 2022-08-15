import React from "react";

function AddTransaction() {
  return (
    <div className="mt-6">
      <h3 className="font-medium">Add New Transaction</h3>
      <form>
        <div className="mt-3">
          <label className="font-medium" htmlFor="text">
            Text{" "}
          </label>{" "}
          <br />
          <input type="text" className="w-full mt-1" placeholder="Enter text" />
        </div>

        <div className="mt-2">
          <label className="font-medium" htmlFor="amount">
            Amount <br />
            (Negative - expense, positive - income)
          </label>{" "}
          <br />
          <input
            type="number"
            className="w-full mt-1"
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
