import { createContext, useContext, useEffect, useState } from "react";

const TransactionContext = createContext({})

export const TransactionProvider = ({children}) => {
    const [transaction, setTransaction] = useState([]);

    useEffect(()=>{
        setTransaction(JSON.parse(localStorage.getItem('transaction')))
    },[])

    const updateStorage = (transaction) =>{
        localStorage.setItem("transaction", JSON.stringify(transaction));
    }

    return(
        <TransactionContext.Provider value={{transaction,setTransaction, updateStorage}}>
            {children}
        </TransactionContext.Provider>

    )
}
export const UseTransaction = () => {
    const context = useContext(TransactionContext)
    if(!context){
        throw new Error('useTransaction most be used with TransactionContext')
    }
    return context
}