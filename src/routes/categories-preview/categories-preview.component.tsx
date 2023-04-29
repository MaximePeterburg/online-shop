import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview title={title} key={title} products={products} />;
      })}
    </div>
  );
}

export default CategoriesPreview;
