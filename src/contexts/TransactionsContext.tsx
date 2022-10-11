import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/axios"

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

        const response = await api.get('transactions',{
            params:{
                    q:query,
            }
        })

        const data = response.data
    
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