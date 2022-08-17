import { createContext, useReducer } from 'react'; 
import { AppReducer } from './AppReducer';

const initialTransac = {
    transactions : [
        { id: 1, text: 'Books', amount: -50 },
        { id: 2, text: 'Phones', amount: -700 },
        { id: 3, text: 'Salary', amount: 2000 },
        { id: 4, text : 'Incomes', amount: 100 },
    ]
}

export const GlobalContext = createContext(initialTransac);

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialTransac);

    function deleteTransaction(id) {
        dispatch({
          type: "DELETE_TRANSACTION",
          payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
          type: "ADD_TRANSACTION",
          payload: transaction
        });
    }
    
    return ( 
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction, addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
     );
}
 
export default GlobalProvider;