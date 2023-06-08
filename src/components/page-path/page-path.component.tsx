import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectProduct } from '../../store/product/product.selector';
import { translatePathPart } from '../../utils/util/util.utils';
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
  if (
    location.pathname === '/' ||
    location.pathname === '/auth' ||
    location.pathname === '/checkout'
  ) {
    return null;
  }
  return (
    <PagePathContainer>
      <Link to='/'>Главная</Link>
      <Division>&#62;</Division>
      {pathnames.map((pathPart, index) => {
        const path = `/${pathnames.slice(0, index + 1).join('/')}`;
        const translatedPathPart = translatePathPart(pathPart);
        const isLastItem = index === pathnames.length - 1;
        if (isLastItem) {
          if (product && parseInt(pathPart)) {
            return <CurrentPathPart key={pathPart}>{product.name}</CurrentPathPart>;
          }
          return <CurrentPathPart key={pathPart}>{translatedPathPart}</CurrentPathPart>;
        }
        return (
          <PathPartContainer key={pathPart}>
            <Link to={path}>{translatedPathPart}</Link>
            <Division>&#62;</Division>
          </PathPartContainer>
        );
      })}
    </PagePathContainer>
  );
};

export default PagePath;
