import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Color from "./Color";

// css
import '@ds.t/scss/lib/Utilities.css'

export default {
  title: 'Atoms/Color',
  component: Color
} as ComponentMeta<typeof Color>

const Template: ComponentStory<typeof Color> = (args) => <Color {...args} />

export const Common = Template.bind({})
Common.args = {
  hexCode: '#000'
}