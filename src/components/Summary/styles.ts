import styled, { css } from "styled-components";

interface SummaryProps{
    variant?:'green'
}

export const SummaryContainer = styled.section`
    width:100%;
    max-width:1200px;

    display:grid;
    margin:0 auto;
    padding:0 1.5rem;
    grid-template-columns:repeat(3, 1fr) ;
    gap:2rem;
    margin-top:-2rem;
`
export const SummaryCard = styled.div<SummaryProps>`
    background:${({theme})=>theme["gray-600"]};
    border-radius:6px;
    padding:1.5rem;
    header{
        color:${({theme})=>theme["gray-300"]};
        display:flex; 
        align-items:center; 
        justify-content:space-between;
    }
    strong{
        display:block;
        margin:1rem 0;
        font-size:2rem;
    }
    ${(props)=> props.variant==='green' && css`
    background:${props.theme["green-700"]}
    ` }
`