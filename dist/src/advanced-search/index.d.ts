import { FormProps } from 'antd';
import AdvancedForm from './AdvancedForm';
import QuickForm from './QuickForm';
import ToolBar from './ToolBar';
import './style/index.less';
declare type Values = object;
export interface AdvancedSearchProps {
    formProps?: FormProps;
    showAdvanced?: boolean;
    filterEmpty?: boolean;
    children: any;
    className?: any;
    style?: any;
    onKeyEnter?: (currentChange: Values, allValues: Values, simpleValues: Values, advancedValues: Values) => void;
    onChange?: (currentChange: Values, allValues: Values, simpleValues: Values, advancedValues: Values) => void;
    onSearch?: (allValues: Values, simpleValues: Values, advancedValues: Values) => void;
}
export interface AdvancedSearchInterface extends AdvancedSearchProps {
    QuickForm?: typeof QuickForm;
    AdvancedForm?: typeof AdvancedForm;
    ToolBar?: typeof ToolBar;
    reset?: () => void;
}
export declare const reset: () => void;
export declare const AdvancedContext: any;
declare const AdvancedSearch: AdvancedSearchInterface;
export default AdvancedSearch;
