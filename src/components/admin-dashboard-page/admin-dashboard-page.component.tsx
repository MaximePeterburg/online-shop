import { Outlet, useLocation } from 'react-router-dom';
import {
  AdminDashboardContainer,
  DashboardLink,
  DashboardLinks,
  OptionPlaceholder
} from './admin-dashboard-page.styles';

const AdminDashboardPage = () => {
  const location = useLocation();
  return (
    <AdminDashboardContainer>
      <div>
        <DashboardLinks>
          <DashboardLink to='/dashboard/orders-handling'>Обработка заказов</DashboardLink>
          <DashboardLink to='/dashboard/orders-handling'>Обработка заказов</DashboardLink>
          <DashboardLink to='/dashboard/orders-handling'>Обработка заказов</DashboardLink>
          <DashboardLink to='/dashboard/orders-handling'>Обработка заказов</DashboardLink>
        </DashboardLinks>
      </div>
      {location.pathname.length > 10 ? (
        <Outlet />
      ) : (
        <OptionPlaceholder>
          <h2>Выберите опцию</h2>
        </OptionPlaceholder>
      )}
    </AdminDashboardContainer>
  );
};

export default AdminDashboardPage;
