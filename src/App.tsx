import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/admin-dashboard-page/admin-dashboard-page.component';
import Checkout from './components/checkout/checkout.component';
import OrdersHandlingPage from './components/orders-handling-page/orders-handling-page.component';
import OrdersPage from './components/orders-page/orders-page.component';
import Search from './components/search-page/search-page.component';
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
          <Route path='orders' element={<OrdersPage />} />
          <Route path='dashboard/' element={<AdminDashboard />}>
            <Route path='orders-handling' element={<OrdersHandlingPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
