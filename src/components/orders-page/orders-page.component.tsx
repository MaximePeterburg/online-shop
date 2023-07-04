import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserOrdersStart } from '../../store/user-orders/user-orders.action';
import { selectUserOrders } from '../../store/user-orders/user-orders.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import OrderItem from '../order-item/order-item.component';
import { OrdersPageContainer } from './orders-page.styles';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const userOrders = useSelector(selectUserOrders);
  const currentUser = useSelector(selectCurrentUser);
  console.log(userOrders);
  useEffect(() => {
    dispatch(fetchUserOrdersStart(currentUser!.id));
  }, []);
  return (
    <OrdersPageContainer>
      {userOrders.map((orderItem) => (
        <OrderItem orderItem={orderItem} />
      ))}
    </OrdersPageContainer>
  );
};

export default OrdersPage;
