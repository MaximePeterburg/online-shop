import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoriesState } from './category.reducer';
import { CategoryItem, CategoryMap } from './category.types';

export const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);
// export const selectProducts = createSelector([selectCategories], (categories) => {
//   const products: CategoryItem[] = [];
//   categories.map((category) => category.items.map((item) => products.push(item)));
//   return products;
// });

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
