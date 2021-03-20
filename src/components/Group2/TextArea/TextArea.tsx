import React from "react";

interface ITextAreaProps {
  val: string;
  cols?: number;
  rows?: number;
  name?: string;
}

const TextArea: React.VFC<ITextAreaProps> = ({
  val,
  cols = 10,
  rows = 5,
  name,
}) => {
  return <textarea name={name} id="" cols={cols} rows={rows} value={val} />;
};

export default TextArea
