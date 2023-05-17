import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import SearchResults from '../../components/search-results/search-results.component';
import { SHOP_DATA } from '../../shop-data';
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
