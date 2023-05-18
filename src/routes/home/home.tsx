import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import { SHOP_DATA } from '../../shop-data';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils';

const Home = () => {
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);
  return (
    <>
      <Directory />
      <Outlet />
    </>
  );
};
export default Home;
