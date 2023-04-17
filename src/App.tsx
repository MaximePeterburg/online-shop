import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './global.styles';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Shop from './routes/shop/shop';
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path='shop/*' element={<Shop />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
