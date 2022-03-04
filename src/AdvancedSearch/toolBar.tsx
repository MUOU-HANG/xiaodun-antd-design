import React, { FC } from 'react';

export interface ToolBarProps{
  children: any;
}

const ToolBar:FC<ToolBarProps> = ({children}) => {
  return (
    <span className="xdad-advance-toolbar">{children}</span>
  );
};

export default ToolBar;
