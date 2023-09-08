export const formatPrice = (val: number) => `$ ${(val * 0.01).toFixed(2)}`;

export const countSum = (items: Array<{ [key: string]: any }>, name: string) =>
  items.reduce((acc, item) => (acc += item[name]), 0);
