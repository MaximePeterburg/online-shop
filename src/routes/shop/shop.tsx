import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PagePath from '../../components/page-path/page-path.component';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import { selectProductIsLoading } from '../../store/product/product.selector';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category';

const Shop = () => {
  const productIsLoading = useSelector(selectProductIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <>
      {!productIsLoading && <PagePath />}
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category/*' element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
