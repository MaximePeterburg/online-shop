import { createSelector } from 'reselect';
import { RootState } from '../store';
import { SearchState } from './search.reducer';

export const selectSearchReducer = (state: RootState): SearchState => state.search;
export const selectSearchItems = createSelector(
  [selectSearchReducer],
  (search) => search.searchItems
);
