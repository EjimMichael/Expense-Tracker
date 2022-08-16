import { createContext, useReducer } from 'react'; 

const initialTransac = {
    transactions : [
        { id: 1, text: 'Books', amount: -50 },
        { id: 2, text: 'Phones', amount: -700 },
        { id: 2, text: 'Salary', amount: 2000 },
        { id: 3, text : 'Incomes', amount: 100 },
    ]
}

export const GlobalContext = createContext(initialTransac);

const AppReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialTransac);

    return ( 
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
     );
}
 
export default GlobalProvider;