import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserOrdersStart } from '../../store/user-orders/user-orders.action';
import {
  selectUserOrders,
  selectUserOrdersIsLoading
} from '../../store/user-orders/user-orders.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import Button from '../button/button.component';
import OrderItem from '../order-item/order-item.component';
import Spinner from '../spinner/spinner.component';
import { NoItemsError, OrdersPageContainer } from './orders-page.styles';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const userOrders = useSelector(selectUserOrders);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/shop');
  };
  const userOrdersIsLoading = useSelector(selectUserOrdersIsLoading);
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    dispatch(fetchUserOrdersStart(currentUser!.id));
  }, []);
  return (
    <OrdersPageContainer>
      {userOrdersIsLoading ? (
        <Spinner />
      ) : userOrders.length === 0 ? (
        <NoItemsError>
          <h2>К сожалению, у вас нет заказов</h2>
          <Button onClick={handleNavigation}>Перейти в каталог</Button>
        </NoItemsError>
      ) : (
        userOrders.map((orderItem) => (
          <OrderItem key={orderItem.id} orderItem={orderItem} />
        ))
      )}
    </OrdersPageContainer>
  );
};

export default OrdersPage;
