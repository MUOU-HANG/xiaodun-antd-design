import { FormProps } from 'antd';
import { FC } from 'react';
declare type Values = object;
export interface AdvancedFormProps extends FormProps {
    onSearch?: (allValues: Values, advancedValues: Values, QuickValues: Values) => void;
    filterEmpty?: boolean;
    style?: any;
    className?: any;
}
declare const AdvancedForm: FC<AdvancedFormProps>;
export default AdvancedForm;
