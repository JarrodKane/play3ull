'use client';

import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

// TODO: Store in local state, reach in to grab on load
interface CartProps {
  amount: number;
  total: number;
  [key: number]: {
    total: number;
    price: number;
  };
}

export type SetCart = React.Dispatch<React.SetStateAction<CartProps>>;

interface CartContextType {
  cart: CartProps;
  addToCart: (id: number, price: number) => void;
  removeFromCart: (id: number) => void;
  totalAmount: number;
}

const initialCart: CartProps = { amount: 0, total: 0 };

export const CartContext = createContext<CartContextType>({
  cart: initialCart,
  addToCart: () => {
    // This is just a dummy initial set
    throw new Error('addToCart function must be implemented');
  },
  removeFromCart: () => {
    throw new Error('removeFromCart function must be implemented');
  },
  totalAmount: 0,
});

export function CartProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [cart, setCart] = useState<CartProps>(initialCart);

  const addToCart = (id: number, price: number): void => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (cart[id]) {
      setCart((prevCart) => ({
        ...prevCart,
        amount: prevCart.amount + prevCart[id].price,
        total: prevCart.total + 1,
        [id]: { total: prevCart[id].total + 1, price: prevCart[id].price },
      }));
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        amount: prevCart.amount + price,
        total: prevCart.total + 1,
        [id]: { total: 1, price },
      }));
    }
  };

  const removeFromCart = (id: number): void => {
    if (cart[id].total > 1) {
      setCart((prevCart) => ({
        ...prevCart,
        amount: prevCart.amount - prevCart[id].price,
        total: prevCart.total - 1,
        [id]: {
          ...prevCart[id],
          total: prevCart[id].total - 1,
        },
      }));
    } else {
      setCart((prevCart) => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (prevCart[id]) {
          // We remove the id and return the rest
          const { [id]: _, ...remainingCart } = prevCart;

          return {
            ...remainingCart,
            amount: prevCart.amount - prevCart[id].price,
            total: prevCart.total - 1,
          };
        }
        return prevCart;
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalAmount: Math.round(cart.amount * 100) / 100,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
