import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from '../src/componentes/AbGrupoOpcoes'

export default {
    title: 'Componentes/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args}/>

export const Default = Template.bind({})

Default.args = {
    opcoes : [
        {
            id: 1,
            title: 'E-Book',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .sob'
        },
        {
            id: 2,
            title: 'Impresso',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .sob'
        },
        {
            id: 3,
            title: 'Impresso + E-Book',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .sob'
        }
    ]
} as AbGrupoOpcoesProps
