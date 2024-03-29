import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import Footer from '../../components/footer/footer.component';
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
