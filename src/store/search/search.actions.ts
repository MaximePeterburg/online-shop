import {
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { CategoryItem, CategoryMap } from '../categories/category.types';
import { SEARCH_ACTION_TYPES } from './search.types';

export const filterProducts = (
  categoryMap: CategoryMap,
  searchTerm: string
): CategoryItem[] => {
  const products = Object.values(categoryMap).flatMap((categoryItems) => categoryItems);
  const searchedProducts = products.filter(({ name }) =>
    name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return searchedProducts;
};
export type SetSearchedProducts = ActionWithPayload<
  SEARCH_ACTION_TYPES.SET_SEARCH_ITEMS,
  CategoryItem[]
>;
export const setSearchedProducts = withMatcher(
  (searchItems: CategoryItem[]): SetSearchedProducts =>
    createAction(SEARCH_ACTION_TYPES.SET_SEARCH_ITEMS, searchItems)
);
export const searchProducts = (categoryMap: CategoryMap, searchTerm: string) => {
  const searchedProducts = filterProducts(categoryMap, searchTerm);
  return setSearchedProducts(searchedProducts);
};
