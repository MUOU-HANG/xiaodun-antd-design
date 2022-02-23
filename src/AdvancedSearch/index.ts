import InternalAdvancedSearch,{reset} from './advancedSearch';

type InternalAdvancedSearchType = typeof InternalAdvancedSearch;

interface AdvancedSearchInterface extends InternalAdvancedSearchType{
  reset: typeof reset;
}

const AdvancedSearch = InternalAdvancedSearch as AdvancedSearchInterface;

AdvancedSearch.reset = reset;

export default AdvancedSearch;
