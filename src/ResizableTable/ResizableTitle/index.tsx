
import React, { FC } from 'react';
import { CSSProperties } from 'react';
import { Resizable } from 'react-resizable';
const reactResizableHandle: CSSProperties = {
  position: 'absolute',
  right: '-5px',
  bottom: 0,
  zIndex: 1,
  width: '10px',
  height: '100%',
  cursor: 'col-resize'
};

 interface ResizableTitleProps{
   onResize: () => void;
   width: number;
   [x: string]: string|number|(()=>void);

}

const ResizableTitle:FC<ResizableTitleProps> = (props) => {
  const { onResize, width, ...restProps } = props;
  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          style={reactResizableHandle}
          onClick={e => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

export default ResizableTitle;
