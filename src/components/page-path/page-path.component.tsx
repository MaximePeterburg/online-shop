import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectProduct } from '../../store/product/product.selector';
import { translateRoutePart } from '../../utils/util/util.utils';
import {
  Division,
  PagePathContainer,
  RouteLastPart,
  RoutePartContainer
} from './page-path.styles';
const PagePath = () => {
  const product = useSelector(selectProduct);
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <PagePathContainer>
      <RoutePartContainer>
        <Link to='/'>Главная</Link>
        <Division>&#62;</Division>
      </RoutePartContainer>
      {pathnames.map((routePart, index) => {
        const path = `/${pathnames.slice(0, index + 1).join('/')}`;
        const translatedRoutePart = translateRoutePart(routePart);
        const isLastItem = index === pathnames.length - 1;
        if (isLastItem) {
          if (product && parseInt(routePart)) {
            return <RouteLastPart key={routePart}>{product.name}</RouteLastPart>;
          }
          return <RouteLastPart key={routePart}>{translatedRoutePart}</RouteLastPart>;
        }
        return (
          <RoutePartContainer key={routePart}>
            <Link to={path}>{translatedRoutePart}</Link>
            <Division>&#62;</Division>
          </RoutePartContainer>
        );
      })}
    </PagePathContainer>
  );
};

export default PagePath;
