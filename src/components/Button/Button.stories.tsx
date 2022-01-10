import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '.'

export default {
	title: 'Button',
	component: Button,
	argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
	label: '기본 버튼',
	color: 'red',
	size: 'small',
}
