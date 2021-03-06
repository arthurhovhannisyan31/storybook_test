import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {
      action: 'clicked'
    }
  },
  decorators: [withKnobs],
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const labelKnob = text('label', args.label)
  return (
    <Button {...args} label={labelKnob} />
  )
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
