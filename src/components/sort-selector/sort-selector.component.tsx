import { CategoryItem } from '../../store/categories/category.types';
import { SortSelectorContainer, SortingSelector } from './sort-selector.styles';

type SortSelectorProps = {
  products: CategoryItem[];
};

const SortSelector = ({ products }: SortSelectorProps) => {
  return (
    <SortSelectorContainer>
      <SortingSelector /* onChange={handleSortChange}*/>
        <option value='newest-first'>По новизне</option>
        <option value='price-ascening'>По возрастанию цены</option>
        <option value='price-descending'>По убыанию цены</option>
      </SortingSelector>
    </SortSelectorContainer>
  );
};

export default SortSelector;
