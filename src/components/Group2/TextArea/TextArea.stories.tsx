import React from "react";
import { storiesOf } from "@storybook/react";

import TextArea from "./TextArea";

storiesOf("Group2/TextArea", module).add("default", () => (
  <TextArea val={""} />
));
