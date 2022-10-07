import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { FormContainer } from "./styles";
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod' 

const searchFormSchema =  z.object({
    query:z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){
    const {register, handleSubmit,formState:{isSubmitting}} = useForm<searchFormInputs>({
        resolver:zodResolver(searchFormSchema)
    })

    async function handleSearchForm(data:searchFormInputs){
        await new Promise(resolve=>setTimeout(resolve, 2000))
        console.log(data)
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