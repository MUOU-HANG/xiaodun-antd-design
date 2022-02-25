import InternalAdvancedSearch, { reset } from './advancedSearch';
import QuickForm from './quickForm';
import AdvancedForm from './advancedForm';
declare type InternalAdvancedSearchType = typeof InternalAdvancedSearch;
interface AdvancedSearchInterface extends InternalAdvancedSearchType {
    reset: typeof reset;
    QuickForm: typeof QuickForm;
    AdvancedForm: typeof AdvancedForm;
}
declare const AdvancedSearch: AdvancedSearchInterface;
export default AdvancedSearch;
