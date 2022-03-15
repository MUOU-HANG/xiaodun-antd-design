import { Button, Input } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import React, { ChangeEventHandler, FC, useState } from 'react';

export interface ButtonInputProps extends React.ComponentProps<any> {
  width?: number | string,
  height?: number | string,
  block?:boolean,
  style?: any,
  size:SizeType,
  clssName?:string,
  text?: string,
  placeholder?: string,
  replace?:React.ReactNode|boolean
  onKeyEnter?: (value:string) => void,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
}
const ButtonInput: FC<ButtonInputProps> = ({
  text = '新增',
  placeholder = '请输入',
  width,
  height,
  size,
  block = false,
  className,
  style,
  onKeyEnter,
  onChange,
  replace=false
}) => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const onInternalKeyEnter = (e:any) => {
    if (e.keyCode === 13) {
      onKeyEnter?.(e.target.value);
    }
  };

  return (
    <span style={{width,...style,display:'inline-block'}} className={className}>
      {toggleBtn
        ? <Input
          style={{ height }}
          size={size}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onInternalKeyEnter}
        />
        : <div onClick={() => setToggleBtn(true)} style={block?{width,display:'inline-block'}:undefined}>
          {replace
            ?replace
            : <Button size={size}>{text}</Button>}
        </div>}
    </span>
  );
};


export default ButtonInput;
