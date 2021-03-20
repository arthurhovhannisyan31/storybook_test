import React from 'react';

export interface IInputProps {
  val?: string;
}

const Input:React.FC<IInputProps> = ({val}) => {
  return(
    <input type="text" value={val} />
  )
}

export default Input
