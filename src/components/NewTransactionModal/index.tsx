import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { useContext } from 'react';
import { TransactionContext } from '../../contexts/TransactionsContext';

const newTransactionsFormSchema = z.object({
    description:z.string(),
    type:z.enum(["income","outcome"]),
    category:z.string(),
    price:z.number(),
    
})


export function NewTransactionModal(){
    const {createTransaction} = useContext(TransactionContext)

    type NewTransactionFormInput = z.infer<typeof newTransactionsFormSchema>
    
   
    
    const {
        control,
        register,
        handleSubmit,
        formState:{isSubmitting},
        reset
    }= useForm<NewTransactionFormInput>({
        resolver:zodResolver(newTransactionsFormSchema),
        defaultValues:{
            type:'income',
        }
    })
    


    async function handleCreateTransaction(data:NewTransactionFormInput){

        const {category,description,price,type} = data

        await createTransaction({
            category,
            description,
            price,
            type
        })   
        reset()
      } 

    return(
    <Dialog.Portal>

        <Overlay/>
        <Content>
            <CloseButton>
                <X size={24}/>
            </CloseButton>
            <Dialog.Title>Nova transação</Dialog.Title>
            <form onSubmit={handleSubmit(handleCreateTransaction)}>
                <input
                 type="text"
                 {...register('description')}
                  placeholder="descrição" 
                  required/>
                <input
                 type="text" 
                 {...register('price', { valueAsNumber: true })}
                 placeholder="Preço" 
                 required/>
                <input 
                type="text" 
                {...register('category')}
                placeholder="categoria" 
                required />
                <Controller
                    control={control}
                    name="type"
                    render={({field})=>{

                        console.log(field)
                    return(
                    <TransactionType 
                        onValueChange={field.onChange} 
                        value={field.value}>  
                        <TransactionTypeButton variant="income" value="income">
                          <ArrowCircleUp size={24}/>  Entrada
                        </TransactionTypeButton>
                        
                        <TransactionTypeButton variant="outcome" value="outcome">
                        <ArrowCircleDown size={24}/>
                            Saida
                        </TransactionTypeButton>
                    </TransactionType>
                    )}}

                />
                <button type="submit" disabled={isSubmitting}>
                    Cadastrar
                </button>
            </form>
            
        </Content>
    </Dialog.Portal>
    )
}