import { Route, Routes } from 'react-router-dom';
import Category from '../../components/categoryPage/category-page.component';
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
