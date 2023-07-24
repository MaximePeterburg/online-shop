import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdminOrdersStart,
  selectAdminOrders,
  selectAdminOrdersIsLoading
} from '../../store/admin-orders/admin-orders.store';
import AdminOrderItem from '../admin-order-item/admin-order-item.component';
import { NoItemsError } from '../orders-page/orders-page.styles';
import Spinner from '../spinner/spinner.component';
import { OrdersHandlingPageContainer } from './orders-handling-page.styles';

const OrdersHandlingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdminOrdersStart());
  }, []);

  const adminOrders = useSelector(selectAdminOrders);
  const adminOrdersIsLoading = useSelector(selectAdminOrdersIsLoading);
  return (
    <OrdersHandlingPageContainer>
      {adminOrdersIsLoading ? (
        <Spinner />
      ) : adminOrders.length === 0 ? (
        <NoItemsError>
          <h2>Заказов нет</h2>
        </NoItemsError>
      ) : (
        adminOrders.map((orderItem) => (
          <AdminOrderItem key={orderItem.id} orderItem={orderItem} />
        ))
      )}
    </OrdersHandlingPageContainer>
  );
};

export default OrdersHandlingPage;
