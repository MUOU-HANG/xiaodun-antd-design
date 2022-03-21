import { FC } from 'react';
declare type Values = object;
export interface QuickFormProps {
    filterEmpty?: boolean;
    style?: any;
    className?: any;
    onChange?: (current: Values, allValues: Values, quickValues: Values, advancedValues: Values) => void;
    onKeyEnter?: (current: Values, allValues: Values, quickValues: Values, advancedValues: Values) => void;
}
declare const QuickForm: FC<QuickFormProps>;
export default QuickForm;
