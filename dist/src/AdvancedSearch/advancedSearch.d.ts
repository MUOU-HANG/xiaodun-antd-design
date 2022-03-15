import { FormProps } from 'antd';
import { FC } from 'react';
import './index.less';
declare type Values = object;
interface AdvancedSearchProps {
    formProps?: FormProps;
    showAdvanced?: boolean;
    filterEmpty?: boolean;
    children: any;
    className?: any;
    style?: any;
    reset?: () => void;
    onKeyEnter?: (currentChange: Values, allValues: Values, simpleValues: Values, advancedValues: Values) => void;
    onChange?: (currentChange: Values, allValues: Values, simpleValues: Values, advancedValues: Values) => void;
    onSearch?: (allValues: Values, simpleValues: Values, advancedValues: Values) => void;
}
export declare const reset: () => void;
export declare const AdvancedContext: any;
declare const AdvancedSearch: FC<AdvancedSearchProps>;
export default AdvancedSearch;
