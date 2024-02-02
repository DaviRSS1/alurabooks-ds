import React from "react"
import styled, { css } from "styled-components"

export interface AbBotaoProps {
    texto?: string;
    tipo?: 'primario' | 'secundario';
    onClick?: () => void;
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
    background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#EB9B00' : '#fff'};
    padding: 16px 32px;
    border: solid 2px #EB9B00;
    color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#fff' : '#EB9B00'};;
    font-size: 20px;
    cursor: pointer;
    ${(props: AbBotaoProps) => props.tipo === 'primario'
        ? css`
            &:hover{
                background: #B87900;
                border: solid 2px #B87900;
            }
    `
        : css`
            &:hover{
                background: #FFF;
                border: solid 2px #B87900;
                color: #B87900;
            }
    `}
`

export const AbBotao = ({ texto, onClick, tipo = 'primario' }: AbBotaoProps) => {
    return (
        <BotaoEstilizado onClick={onClick} tipo={tipo}>
            {texto}
        </BotaoEstilizado>
    )
}
