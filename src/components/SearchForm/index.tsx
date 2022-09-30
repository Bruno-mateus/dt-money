import { MagnifyingGlass } from "phosphor-react";
import { FormContainer } from "./styles";

export function SearchForm(){
    return(
        <FormContainer>
            <input type="text" placeholder="Pesquise uma transação"/>
            <button><MagnifyingGlass/> Buscar</button>
        </FormContainer>
    )
}