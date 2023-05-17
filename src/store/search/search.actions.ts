import {
  ActionWithPayload,
  createAction,
  withMatcher
} from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/category.types';
import { SEARCH_ACTION_TYPES } from './search.types';

export const createSearchItems = (
  products: CategoryItem[],
  searchTerm: string
): CategoryItem[] => {
  const searchedProducts = products.filter(({ name }) =>
    name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return searchedProducts;
};
export type SetSearchItems = ActionWithPayload<
  SEARCH_ACTION_TYPES.SET_SEARCH_ITEMS,
  CategoryItem[]
>;
export const setSearchItems = withMatcher(
  (searchItems: CategoryItem[]): SetSearchItems =>
    createAction(SEARCH_ACTION_TYPES.SET_SEARCH_ITEMS, searchItems)
);
export const createSearchedItems = (products: CategoryItem[], searchTerm: string) => {
  const searchedProducts = createSearchItems(products, searchTerm);
  return setSearchItems(searchedProducts);
};
