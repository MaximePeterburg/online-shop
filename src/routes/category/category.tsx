import { Route, Routes } from 'react-router-dom';
import CategoryPage from '../../components/categoryPage/category-page.component';
import ProductPage from '../../components/product-page/product-page.component';

const Category = () => {
  return (
    <Routes>
      <Route index element={<CategoryPage />} />
      <Route path=':id' element={<ProductPage />} />
    </Routes>
  );
};

export default Category;
