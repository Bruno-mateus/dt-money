import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width:100%;
    max-width:1220px;
    margin:4rem auto 0;
    padding:0 1.5rem;

`

export const TransactionsTable = styled.table`
    margin-top:1.5rem;
    width:100%;
    border-collapse:separate ;
    border-spacing:0 0.5rem ;
    td{ 
        background-color:${({theme})=>theme["gray-700"]};
        padding:1.5rem 2rem;
        &:first-child{
            border-top-left-radius:6px ;
            border-bottom-left-radius:6px;
        }
        &:last-child{
            border-top-right-radius:6px ;
            border-bottom-right-radius:6px;
        }
    }
`

interface PriceHighlightProps{
    variant:'income'|'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color:${({theme,variant})=>variant==="income"?theme["green-500"]:theme["red-300"]}
`

