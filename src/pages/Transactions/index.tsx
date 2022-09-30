
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer,TransactionsTable } from "./styles";

export function Transactions(){
    return(
        <main>          
            <Summary/>
            
            <TransactionsContainer>
            <SearchForm/>
            <TransactionsTable>
            <tbody>
                <tr>
                    <td width='50%'>Desenvolvimento de site</td>
                    <td>
                       <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight> 
                    </td>
                    <td>
                        Venda
                    </td>
                    <td>29/09/2022</td>
                </tr>
                <tr>
                    <td width='50%'>Desenvolvimento de site</td>
                    <td>
                    <PriceHighlight variant="outcome">-R$ 5.000,00</PriceHighlight> 
                    </td>
                    <td>
                        Venda
                    </td>
                    <td>29/09/2022</td>
                </tr>

            </tbody>
            </TransactionsTable>

            </TransactionsContainer>

        </main>
    )
}