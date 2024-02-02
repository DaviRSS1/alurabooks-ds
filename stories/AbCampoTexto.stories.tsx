import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbCampoTexto, AbCampoTextoProps } from '../src/componentes/AbCampoTexto'

export default {
    title: 'Componentes/AbCampoTexto',
    component: AbCampoTexto,
    argTypes: {
        label: {
            control: 'text'
        }
      },
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args}/>

export const Default = Template.bind({})

Default.args = {
    label: 'E-Mail',
    placeholder: 'Digite seu E-Mail...',
    type: "email"
} as AbCampoTextoProps

