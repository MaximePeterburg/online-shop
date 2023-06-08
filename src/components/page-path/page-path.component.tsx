import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectProduct } from '../../store/product/product.selector';
import {
  CurrentPathPart,
  Division,
  PagePathContainer,
  PathPartContainer
} from './page-path.styles';
const PagePath = () => {
  const product = useSelector(selectProduct);
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  if (location.pathname === '/') {
    return null;
  }
  return (
    <PagePathContainer>
      <Link to='/'>Главная</Link>
      <Division>/</Division>
      {pathnames.map((pathPart, index) => {
        const path = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLastItem = index === pathnames.length - 1;
        if (isLastItem) {
          if (product && parseInt(pathPart)) {
            console.log(product);
            return <CurrentPathPart key={pathPart}>{product.name}</CurrentPathPart>;
          }
          return <CurrentPathPart key={pathPart}>{pathPart}</CurrentPathPart>;
        }
        return (
          <PathPartContainer key={pathPart}>
            <Link to={path}>{pathPart}</Link>
            <Division>/</Division>
          </PathPartContainer>
        );
      })}
    </PagePathContainer>
  );
};

export default PagePath;
