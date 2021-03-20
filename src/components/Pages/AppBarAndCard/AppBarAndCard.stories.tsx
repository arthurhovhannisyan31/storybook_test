import React from 'react';
import { Story, Meta } from '@storybook/react';

import AppBarAndCard from './index'

export default {
  title: 'Pages/AppBarAndCard',
  component: AppBarAndCard
}

const Template: Story = () => <AppBarAndCard />


export const Primary = Template.bind({})
