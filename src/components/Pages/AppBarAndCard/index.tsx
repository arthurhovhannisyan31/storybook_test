import React from 'react';

import useStyles from './style'

interface IindexProps {}

const AppBarAndCard:React.FC<IindexProps> = () => {
  const classes = useStyles();
  return(
      <>
        <span>AppBarAndCard</span>
      </>
  )
}

export default AppBarAndCard
