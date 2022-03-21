import InternalAdvancedSearch, { reset } from './AdvancedSearch';
import QuickForm, { QuickFormProps } from './QuickForm';
import AdvancedForm, { AdvancedFormProps } from './AdvancedForm';
import ToolBar, { ToolBarProps } from './ToolBar';
declare type InternalAdvancedSearchType = typeof InternalAdvancedSearch;
interface AdvancedSearchInterface extends InternalAdvancedSearchType {
    QuickForm: typeof QuickForm;
    AdvancedForm: typeof AdvancedForm;
    ToolBar: typeof ToolBar;
    reset: typeof reset;
}
declare const AdvancedSearch: AdvancedSearchInterface;
export { AdvancedFormProps, QuickFormProps, ToolBarProps };
export default AdvancedSearch;
