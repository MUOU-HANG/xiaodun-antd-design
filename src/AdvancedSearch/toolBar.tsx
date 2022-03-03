import React, { FC } from 'react';

export interface ToolBarProps{
  children: any;
}

const ToolBar:FC<ToolBarProps> = ({children}) => {
  return (
    <>{children}</>
  );
};

export default ToolBar;
