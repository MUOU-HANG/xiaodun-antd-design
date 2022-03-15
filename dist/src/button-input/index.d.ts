import { SizeType } from 'antd/lib/config-provider/SizeContext';
import React, { ChangeEventHandler, FC } from 'react';
export interface ButtonInputProps extends React.ComponentProps<any> {
    width?: number | string;
    height?: number | string;
    block?: boolean;
    style?: any;
    size: SizeType;
    clssName?: string;
    text?: string;
    placeholder?: string;
    replace?: React.ReactNode | boolean;
    onKeyEnter?: (value: string) => void;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}
declare const ButtonInput: FC<ButtonInputProps>;
export default ButtonInput;
