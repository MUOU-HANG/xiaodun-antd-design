import InternalAdvancedSearch, { reset } from './advancedSearch';
import QuickForm from './quickForm';
import AdvancedForm from './advancedForm';
import ToolBar from './toolBar';

type InternalAdvancedSearchType = typeof InternalAdvancedSearch;

interface AdvancedSearchInterface extends InternalAdvancedSearchType{
  reset: typeof reset;
  QuickForm: typeof QuickForm,
  AdvancedForm: typeof AdvancedForm,
  ToolBar: typeof ToolBar

}

const AdvancedSearch = InternalAdvancedSearch as AdvancedSearchInterface;

AdvancedSearch.reset = reset;
AdvancedSearch.QuickForm = QuickForm;
AdvancedSearch.AdvancedForm = AdvancedForm;
AdvancedSearch.ToolBar = ToolBar;

export default AdvancedSearch;
