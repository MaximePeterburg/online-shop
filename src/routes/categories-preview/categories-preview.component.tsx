import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from '../../store/categories/category.selector';
import { CategoriesPreviewContainer } from './categories-preview.styles';

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <CategoriesPreviewContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview title={title} key={title} products={products} />;
        })
      )}
    </CategoriesPreviewContainer>
  );
}

export default CategoriesPreview;
