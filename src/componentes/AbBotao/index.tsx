import React from "react"
import styled from "styled-components"

const BotaoEstilizado = styled.button`
    background: #EB9B00;
    padding: 16px 32px;
    border: solid 2px #EB9B00;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    &:hover{
        background: #B87900;
        border: solid 2px #B87900;
    }
`

export const AbBotao = () => {
    return(
    <BotaoEstilizado>
        Clique Aqui!
    </BotaoEstilizado>
    )
}