import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbQuantidade, AbQuantidadeProps } from '../src/componentes/AbQuantidade'

export default {
  title: 'componentes/AbQuantidade',
  component: AbQuantidade,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbQuantidade>;

const Template: ComponentStory<typeof AbQuantidade> = (args) => <AbQuantidade {...args} />;

export const AbQuantidadeComponent = Template.bind({})
AbQuantidadeComponent.args = {
    label: 'Quantidade'
} as AbQuantidadeProps