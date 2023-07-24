import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllOrdersStart } from '../../store/user-orders/user-orders.action';
import {
  selectAllOrders,
  selectUserOrdersIsLoading
} from '../../store/user-orders/user-orders.selector';
import AdminOrderItem from '../admin-order-item/admin-order-item.component';
import { NoItemsError } from '../orders-page/orders-page.styles';
import Spinner from '../spinner/spinner.component';
import { OrdersHandlingPageContainer } from './orders-handling-page.styles';

const OrdersHandlingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllOrdersStart());
  }, []);

  const allOrders = useSelector(selectAllOrders);
  const allOrdersIsLoading = useSelector(selectUserOrdersIsLoading);
  return (
    <OrdersHandlingPageContainer>
      {allOrdersIsLoading ? (
        <Spinner />
      ) : allOrders.length === 0 ? (
        <NoItemsError>
          <h2>Заказов нет</h2>
        </NoItemsError>
      ) : (
        allOrders.map((orderItem) => (
          <AdminOrderItem key={orderItem.id} orderItem={orderItem} />
        ))
      )}
    </OrdersHandlingPageContainer>
  );
};

export default OrdersHandlingPage;
