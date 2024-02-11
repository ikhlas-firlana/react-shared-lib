import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  handleItem: (name) => {},
});
