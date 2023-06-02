import { Route, Routes } from 'react-router-dom';
import Category from '../../components/category/category.component';
import ProductPage from '../../components/product-page/product-page.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
