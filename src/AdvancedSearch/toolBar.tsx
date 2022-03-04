import React, { FC } from 'react';

export interface ToolBarProps{
  children: any;
}

const ToolBar:FC<ToolBarProps> = ({children}) => {
  return (
    <span style={{margin:0,padding:0}} className="xdad-advance-toolbar-item">{children}</span>
  );
};

export default ToolBar;
