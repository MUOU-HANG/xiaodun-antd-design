import { FormProps } from 'antd';
import { FC, ReactElement } from 'react';
import './index.less';
declare type Values = object;
interface AdvancedSearchProps {
    formProps?: FormProps;
    children: ReactElement[];
    showAdvanced: boolean;
    filterEmpty: boolean;
    reset: () => void;
    onKeyEnter: (currentChange: Values, allSearchValues: Values, simpleValues: Values, advancedValues: Values) => void;
    onChange: (currentChange: Values, allSearchValues: Values, simpleValues: Values, advancedValues: Values) => void;
    onSearch?: (allValues: Values, simpleValues: Values, advancedValues: Values) => void;
}
export declare const reset: () => void;
declare const AdvancedSearch: FC<AdvancedSearchProps>;
export default AdvancedSearch;
