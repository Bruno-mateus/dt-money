import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { FormContainer } from "./styles";
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod' 
import { TransactionContext } from "../../contexts/TransactionsContext";
import { useContext } from "react";

const searchFormSchema =  z.object({
    query:z.string(),
})


type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){
    const {register, handleSubmit,formState:{isSubmitting}} = useForm<searchFormInputs>({
        resolver:zodResolver(searchFormSchema)
    })
    const {fetchTransactions} = useContext(TransactionContext)
    async function handleSearchForm(data:searchFormInputs){
        
        await fetchTransactions(data.query)
    }

    return(
        <FormContainer onSubmit={handleSubmit(handleSearchForm)}>
            <input type="text" 
            placeholder="Pesquise uma transação"
            {...register('query')}
            />
            <button disabled={isSubmitting}><MagnifyingGlass/> Buscar</button>
        </FormContainer>
    )
}