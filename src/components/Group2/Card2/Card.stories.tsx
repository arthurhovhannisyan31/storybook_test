import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '@material-ui/core/Button';
import {action} from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

import Card, {IMediaCardProps} from "./Card";

export default {
  title: 'Group2/Card',
  component: Card,
  subcomponents:{
    Button
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {
      action: 'clicked'
    }
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title/>
          <Subtitle/>
          <Description/>
          <Primary/>
          <ArgsTable story={PRIMARY_STORY}/>
          <Stories/>
        </>
      )
    },
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  decorators: [withKnobs],
} as Meta;

const Template: Story<IMediaCardProps> = (args) => {
  const titleKnow = text('title', args.title as string)
  return (
    <Card {...args} title={titleKnow} />
  )
}

export const PrimaryComponent = Template.bind({})
PrimaryComponent.args ={
  title:'Contemplative Reptile',
  onShareClick: action('share')
}
