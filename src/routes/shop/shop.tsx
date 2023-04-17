import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Category from '../../components/category/category.component';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';

const Shop = () => {
  const disapatch = useDispatch();
  useEffect(() => {
    disapatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
