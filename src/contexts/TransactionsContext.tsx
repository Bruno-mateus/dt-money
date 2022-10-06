import { createContext, ReactNode, useEffect, useState } from "react"

interface Transaction{
    id:number,
    description:string,
    type:"income"|"outcome",
    category:string,
    price:1400,
    createdAt:string
}

interface TransactionContextType{
    transactions:Transaction[]
}

interface TransactionsContextProvider{
    children:ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}:TransactionsContextProvider){

    const [transactions,setTransactions] = useState<Transaction[]>([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:5000/transactions')
        const data = await response.json()
    
        setTransactions(data)
      }
    
      useEffect(() => {
        loadTransactions()
      }, []);

    return (
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}