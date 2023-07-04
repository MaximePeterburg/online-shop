import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserOrdersStart } from '../../store/user-orders/user-orders.action';
import { selectUserOrders } from '../../store/user-orders/user-orders.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import OrderPreview from '../order-preview/order-preview.component';

const Orders = () => {
  const dispatch = useDispatch();
  const userOrders = useSelector(selectUserOrders);
  const currentUser = useSelector(selectCurrentUser);
  console.log(userOrders);
  useEffect(() => {
    dispatch(fetchUserOrdersStart(currentUser!.id));
  }, []);
  return (
    <div>
      {userOrders.map((orderDetails) => (
        <OrderPreview orderDetails={orderDetails} />
      ))}
    </div>
  );
};

export default Orders;
