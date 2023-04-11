import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './global.styles';
import Home from './routes/home/home';
import Shop from './routes/home/shop';
function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='shop/*' element={<Shop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
