import React from "react";
import { storiesOf } from "@storybook/react";

import Card, {IMediaCardProps} from "./Card";

const props: IMediaCardProps = {
  title: 'Contemplative Reptile1',
}

storiesOf("Group1/Card", module)
  .addDecorator((story) => (
    <div>
      <p style={{backgroundColor: 'gray'}}>start</p>
      {story()}
      <p style={{backgroundColor: 'gray'}}>stop</p>
    </div>
  ))
  .add("titled", () => (<Card {...props} />))
  .add("title less", () => (<Card  />))

