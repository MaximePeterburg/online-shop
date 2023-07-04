import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Checkout from './components/checkout/checkout.component';
import Search from './components/search/search.component';
import { GlobalStyle } from './global.styles';
import Authentication from './routes/authentication/authentication';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Shop from './routes/shop/shop';
import { fetchCategoriesStart } from './store/categories/category.action';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
