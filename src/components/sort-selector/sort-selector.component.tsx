import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { CategoryItem } from '../../store/categories/category.types';
import {
  ascSortCategoryItems,
  descSortCategoryItems,
  newestSortCategoryItems
} from '../../store/sorting/sorting.store';
import { SortSelectorContainer, SortingSelector } from './sort-selector.styles';

type SortSelectorProps = {
  products: CategoryItem[];
};
const SortSelector = ({ products }: SortSelectorProps) => {
  const dispatch = useDispatch();
  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const initialProductsState = [...products];
    let sortedProducts = initialProductsState;
    const { value } = event.target;
    if (value === 'price-ascening') dispatch(ascSortCategoryItems(sortedProducts));
    if (value === 'price-descending') dispatch(descSortCategoryItems(sortedProducts));
    if (value === 'newest-first') dispatch(newestSortCategoryItems(initialProductsState));
  };
  return (
    <SortSelectorContainer>
      <SortingSelector onChange={handleSortChange}>
        <option value='newest-first'>По новизне</option>
        <option value='price-ascening'>По возрастанию цены</option>
        <option value='price-descending'>По убыанию цены</option>
      </SortingSelector>
    </SortSelectorContainer>
  );
};

export default SortSelector;
