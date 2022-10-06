
import { useContext  } from "react";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHighlight, TransactionsContainer,TransactionsTable } from "./styles";

export function Transactions(){


    
const {transactions} = useContext(TransactionContext)
console.log(transactions)
    return(
        <main>          
            <Summary/>
            
            <TransactionsContainer>
            <SearchForm/>
            <TransactionsTable>
            <tbody>
                {
                    transactions.map(transaction=>{
                        return(
                        <tr key={transaction.id}>
                            <td width='50%'>{transaction.description}</td>
                            <td>
                               <PriceHighlight variant={transaction.type}>{priceFormatter.format( transaction.price)}</PriceHighlight> 
                            </td>
                            <td>
                            {transaction.description}
                            </td>
                            <td>{dateFormatter.format( new Date(transaction.createdAt))}</td>
                        </tr>
                        )
                    })
                }

            </tbody>
            </TransactionsTable>

            </TransactionsContainer>

        </main>
    )
}