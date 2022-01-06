import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '.'

export default {
  title: 'Button',
  component : Button
} as ComponentMeta<typeof Button>

const Template:ComponentStory<typeof Button> = args => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children : <span>Basic</span>
}
