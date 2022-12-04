import { ComponentStory, ComponentMeta } from '@storybook/react'

import '../styles/index.scss'
import { Button } from 'components'

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ButtonTemplate = Template.bind({})

ButtonTemplate.args = {
  primary: true,
  size: 'large',
  children: 'Button',
}
