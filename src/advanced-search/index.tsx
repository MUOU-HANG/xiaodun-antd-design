import InternalAdvancedSearch,{reset} from './AdvancedSearch';
import QuickForm,{QuickFormProps} from './QuickForm';
import AdvancedForm,{AdvancedFormProps} from './AdvancedForm';
import ToolBar,{ToolBarProps} from './ToolBar';

type InternalAdvancedSearchType = typeof InternalAdvancedSearch;

interface AdvancedSearchInterface extends InternalAdvancedSearchType{
  QuickForm: typeof QuickForm,
  AdvancedForm: typeof AdvancedForm,
  ToolBar: typeof ToolBar
  reset: typeof reset,
}

const AdvancedSearch = InternalAdvancedSearch as AdvancedSearchInterface;

AdvancedSearch.QuickForm = QuickForm;
AdvancedSearch.AdvancedForm = AdvancedForm;
AdvancedSearch.ToolBar = ToolBar;
AdvancedSearch.reset = reset;

export {
  AdvancedFormProps,
  QuickFormProps,
  ToolBarProps
};

export default AdvancedSearch;
