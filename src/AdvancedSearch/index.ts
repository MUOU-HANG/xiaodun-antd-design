import InternalAdvancedSearch, { reset } from './AdvancedSearch';
import QuickForm from './quickForm';
import AdvancedForm from './advancedForm';

type InternalAdvancedSearchType = typeof InternalAdvancedSearch;

interface AdvancedSearchInterface extends InternalAdvancedSearchType{
  reset: typeof reset;
  QuickForm: typeof QuickForm,
  AdvancedForm: typeof AdvancedForm,

}

const AdvancedSearch = InternalAdvancedSearch as AdvancedSearchInterface;

AdvancedSearch.reset = reset;
AdvancedSearch.QuickForm = QuickForm;
AdvancedSearch.AdvancedForm = AdvancedForm;

export default AdvancedSearch;
