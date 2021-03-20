import React from 'react'

import {Story, Meta} from '@storybook/react'

import Input, {IInputProps} from './Input'

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [
        { name: 'red', value: '#f00', },
        { name: 'green', value: '#0f0', },
        { name: 'blue', value: '#00f', },
      ]
    }
  },
  decorators: [
    ((Story) => (
      <div className={'testClassName'}>
        <Story/>
      </div>
    ))
  ]
} as Meta

export const Template: Story<IInputProps> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Primary Input'
Primary.args = {
  val: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.storyName = 'Secondary Input'
Secondary.args = {
  val: 'Secondary'
}

export const Tertiary = Template.bind({})
Tertiary.storyName = 'Tertiary Input'
Tertiary.args = {
  val: 'Tertiary'
}
