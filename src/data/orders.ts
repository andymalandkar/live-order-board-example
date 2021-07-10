import {
  CoinType,
  Order,
  OrderType,
} from 'live-order-board-crypto-inc/lib/types';

export const orders: Order[] = [
  {
    userId: 'user 1',
    coinType: CoinType.Bitcoin,
    orderQuantity: 100,
    pricePerCoin: '£30',
    orderType: OrderType.Sell,
  },
  {
    userId: 'user 2',
    coinType: CoinType.Ethereum,
    orderQuantity: 315,
    pricePerCoin: '£40',
    orderType: OrderType.Sell,
  },
  {
    userId: 'user 3',
    coinType: CoinType.Bitcoin,
    orderQuantity: 315,
    pricePerCoin: '£30',
    orderType: OrderType.Sell,
  },
  {
    userId: 'user 1',
    coinType: CoinType.Ripple,
    orderQuantity: 315,
    pricePerCoin: '£30',
    orderType: OrderType.Sell,
  },
  {
    userId: 'user 2',
    coinType: CoinType.Bitcoin,
    orderQuantity: 315,
    pricePerCoin: '£90',
    orderType: OrderType.Sell,
  },
  {
    userId: 'user 1',
    coinType: CoinType.Stellar,
    orderQuantity: 315,
    pricePerCoin: '£33.14',
    orderType: OrderType.Sell,
  },
  {
    userId: 'user 3',
    coinType: CoinType.Bitcoin,
    orderQuantity: 315,
    pricePerCoin: '£10',
    orderType: OrderType.Sell,
  },
  {
    userId: 'user 4',
    coinType: CoinType.Litecoin,
    orderQuantity: 315,
    pricePerCoin: '£15.23',
    orderType: OrderType.Sell,
  },
];
