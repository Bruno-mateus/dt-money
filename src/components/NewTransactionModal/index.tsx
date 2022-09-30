import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
export function NewTransactionModal(){
    return(
    <Dialog.Portal>

        <Overlay/>
        <Content>
            <CloseButton>
                <X size={24}/>
            </CloseButton>
            <Dialog.Title>Nova transação</Dialog.Title>
            <form action="">
                <input type="text" placeholder="descrição" required/>
                <input type="text" placeholder="Preço" required/>
                <input type="text" placeholder="categoria" required />
                <TransactionType>
                    <TransactionTypeButton variant="income" value="income">
                      <ArrowCircleUp size={24}/>  Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24}/>
                        Saida
                    </TransactionTypeButton>
                </TransactionType>
                <button type="submit">
                    Cadastrar
                </button>
            </form>
            
        </Content>
    </Dialog.Portal>
    )
}