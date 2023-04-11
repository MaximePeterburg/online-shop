import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../../components/category/category.component';

type Props = {};

const Shop = (props: Props) => {
  return (
    <Routes>
      <Route path=':category' element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
