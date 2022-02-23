import InternalAdvancedSearch, { reset } from './advancedSearch';
declare type InternalAdvancedSearchType = typeof InternalAdvancedSearch;
interface AdvancedSearchInterface extends InternalAdvancedSearchType {
    reset: typeof reset;
}
declare const AdvancedSearch: AdvancedSearchInterface;
export default AdvancedSearch;
