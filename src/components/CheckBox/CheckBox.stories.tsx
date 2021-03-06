import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import CheckBox from '.'

export default {
	title: 'CheckBox',
	component: CheckBox,
	argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />

export const Basic = Template.bind({})
Basic.args = {
	theme: 'black',
	checked: true,
	scale: 2
}
