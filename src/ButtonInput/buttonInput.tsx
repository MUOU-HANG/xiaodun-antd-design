import { Button, Input } from 'antd';
import React, { ChangeEventHandler, FC, useState } from 'react';

export interface ButtonInputProps extends React.ComponentProps<any> {
  width?: number | string,
  text?: string,
  placeholder?: string,
  onKeyEnter?: (value:string) => void,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
  replace?:React.ReactNode|boolean
}
const ButtonInput: FC<ButtonInputProps> = ({
  text = '新增',
  placeholder = '请输入',
  width,
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
    <>
      {
        toggleBtn
          ? <Input
            style={{width}}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onInternalKeyEnter}
          />
          : <span onClick={() => setToggleBtn(true)}>
            {replace
              ?replace
              : <Button >{text}</Button>}
          </span>
      }
    </>

  );
};


export default ButtonInput;
