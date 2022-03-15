/// <reference types="react" />
import { ButtonProps } from 'antd/es/button';
interface CountdownButtonType extends Omit<ButtonProps, 'disabled' | 'onClick'> {
    maxSecondNum?: number;
    txt?: string;
    loadingTxt?: string;
    disabledTxt?: (s: number) => string;
    onClick: (completeCallback: () => void) => void;
}
declare const CountdownButton: ({ maxSecondNum, txt, loadingTxt, disabledTxt, onClick, ...rest }: CountdownButtonType) => JSX.Element;
export default CountdownButton;
