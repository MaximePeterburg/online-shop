import { AnyAction } from 'redux';
import { createSelector } from 'reselect';
import {
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/category.types';
import { RootState } from '../store';

export enum SORTING_ACTION_TYPES {
  SET_SORTED_CATEGORY_ITEMS = 'sorting/SET_SORTED_CATEGORY_ITEMS'
}
export const ascSortCategoryItems = (categoryItems: CategoryItem[]) => {
  const newCategoryItems = [...categoryItems];
  newCategoryItems.sort((a, b) => a.price - b.price);
  return setSortedCategoryItems(newCategoryItems);
};
export const descSortCategoryItems = (categoryItems: CategoryItem[]) => {
  const newCategoryItems = [...categoryItems];
  newCategoryItems.sort((a, b) => b.price - a.price);
  return setSortedCategoryItems(newCategoryItems);
};
export const newestSortCategoryItems = (categoryItems: CategoryItem[]) => {
  const newCategoryItems = [...categoryItems];
  newCategoryItems.sort((a, b) => b.id - a.id);
  return setSortedCategoryItems(newCategoryItems);
};
export type SetSortedCategoryItems = ActionWithPayload<
  SORTING_ACTION_TYPES.SET_SORTED_CATEGORY_ITEMS,
  CategoryItem[]
>;
export const setSortedCategoryItems = withMatcher(
  (categoryItems: CategoryItem[]): SetSortedCategoryItems =>
    createAction(SORTING_ACTION_TYPES.SET_SORTED_CATEGORY_ITEMS, categoryItems)
);
export type SortingState = {
  categoryItems: CategoryItem[];
};
export const INITIAL_SORTING_STATE = {
  categoryItems: []
};
export const sortingReducer = (
  state = INITIAL_SORTING_STATE,
  action: AnyAction
): SortingState => {
  if (setSortedCategoryItems.match(action)) {
    return { ...state, categoryItems: action.payload };
  }
  return state;
};
export const selectSortingReducer = (state: RootState): SortingState => state.sorting;
export const selectSortedCategoryItems = createSelector(
  [selectSortingReducer],
  (sorting) => sorting.categoryItems
);
