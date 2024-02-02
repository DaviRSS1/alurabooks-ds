import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbTags, AbTagsProps } from '../src/componentes/AbTags';

export default {
  title: 'componentes/Tags',
  component: AbTags,
} as ComponentMeta<typeof AbTags>;

const Template: ComponentStory<typeof AbTags> = (args) => <AbTags {...args}/>

export const Primario = Template.bind({})

Primario.args = {
    texto: 'Tag'
} as AbTagsProps