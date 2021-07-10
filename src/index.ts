import { getOrdersSummary, placeOrder } from 'live-order-board-crypto-inc';
import { orders } from './data/orders';

const executeOrders = async () => {
  for (var i = 0; i < orders.length; i++) {
    placeOrder(orders[i]);
    console.table(getOrdersSummary().sellOrders);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

executeOrders();
