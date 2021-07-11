import {
  cancelOrder,
  getOrdersSummary,
  placeOrder,
} from 'live-order-board-crypto-inc';
import { orders } from './data/orders';

const executeOrders = async () => {
  const orderIds: string[] = [];
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    console.log(`${order.coinType} ${order.orderType} order`);

    orderIds.push(placeOrder(order));

    console.log('Sell Orders summary');
    console.table(getOrdersSummary().sellOrders);

    console.log('Buy Orders summary');
    console.table(getOrdersSummary().buyOrders);
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  console.log('********Order Cancelation**********');
  console.table(orderIds);
  await new Promise((resolve) => setTimeout(resolve, 100));

  for (let i = 0; i < orderIds.length; i++) {
    cancelOrder(orderIds[i]);

    console.log('Sell Orders summary');
    console.table(getOrdersSummary().sellOrders);

    console.log('Buy Orders summary');
    console.table(getOrdersSummary().buyOrders);
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
};

executeOrders();
