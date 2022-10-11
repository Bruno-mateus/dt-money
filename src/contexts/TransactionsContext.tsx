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
    fetchTransactions:(query?:string)=>void
}

interface TransactionsContextProvider{
    children:ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}:TransactionsContextProvider){

    const [transactions,setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?:string) {
       
        const url = new URL('http://localhost:5000/transactions')

        if(query) url.searchParams.append('q', query)

        const response = await fetch(url)

        const data = await response.json()
    
        setTransactions(data)
      }
    
      useEffect(() => {
        fetchTransactions()
      }, []);

    return (
        <TransactionContext.Provider value={{transactions,fetchTransactions}}>
            {children}
        </TransactionContext.Provider>
    )
}